/*
 * Copyright © 2020 Ty Dira <ty@dira.dev>
 *
 * This file is part of Exuo.

 * Exuo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * Exuo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with Exuo.  If not, see <https://www.gnu.org/licenses/>.
 */

import {
  Instance,
  onPatch,
  getSnapshot,
  getMembers,
  applySnapshot,
  SnapshotIn,
  IAnyModelType,
} from 'mobx-state-tree'
import Dexie from 'dexie'

import { graphFactory } from 'graph/factories'
import { Node, Config } from './Node'

async function persist(graph: Instance<typeof Graph>): Promise<void> {
  const db = new Dexie('default')
  const tableNames = Object.keys(getMembers(graph).properties)
  const tableConfig = Object.fromEntries(tableNames.map(name => [name, 'id']))

  db.version(1).stores(tableConfig)

  return Promise.all(
    tableNames.map(name =>
      db
        .table(name)
        .toArray()
        .then(rows => [name, Object.fromEntries(rows.map(r => [r.id, r]))]),
    ),
  ).then(resolved => {
    applySnapshot(graph, Object.fromEntries(resolved))
    onPatch(graph, patch => {
      const [typeName, id, propName] = patch.path.split('/').slice(1)
      if (patch.op === 'add') {
        db.table(typeName).put(getSnapshot(graph[typeName].get(id)))
      } else if (patch.op === 'replace' || patch.op === 'remove') {
        if (propName) {
          db.table(typeName).update(id, {
            [propName]: getSnapshot(graph[typeName].get(id)[propName]),
          })
        } else {
          db.table(typeName).delete(id)
        }
      } else {
        throw Error(`Unknown patch op '${patch.op}'`)
      }
    })
  })
}

async function initialize(graph: Instance<typeof Graph>): Promise<void> {
  if (graph.Config.has('graph')) {
    return
  }

  const root = graph.createNode('Node', { label: 'Root' })
  graph.createNode('Config', {
    id: 'graph',
    items: { rootNodeId: root.id },
  })
}

export const Graph = graphFactory({ Node, Config })
  .actions(self => ({
    afterCreate() {
      const adapters = [persist, initialize]
      adapters
        .reduce(async (prev, next) => {
          await prev
          return next(self)
        }, Promise.resolve())
        .catch(error => {
          throw Error(`Adapter error: ${error}`)
        })
    },

    createChild<T extends IAnyModelType>(
      node: Instance<typeof Node>,
      edgeProps: SnapshotIn<T>,
      edgeType = 'Node',
    ): Instance<typeof Node> {
      const child = self.createNode(edgeType, edgeProps)

      node.addEdge('child', child)
      child.addEdge('parent', node)

      return
    },
  }))
  .views(self => ({
    get rootNode() {
      const config = self.Config.get('graph')
      return self.Node.get(config?.get('rootNodeId'))
    },
  }))