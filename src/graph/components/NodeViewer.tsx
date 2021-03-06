/*
 * Copyright © 2020 Ty Dira <ty@dira.dev>

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

import React from 'react'
import { observer } from 'mobx-react-lite'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
/* import { TouchBackend } from 'react-dnd-touch-backend' */

import { NodeLayout, EdgeList, useGraph, ActiveProvider } from 'exuo/src/graph'

interface NodeViewerProps {
  id?: string
}

export const NodeViewer: React.FunctionComponent<NodeViewerProps> = observer(
  ({ id }) => {
    const graph = useGraph()
    const lookup = graph.Node.get(id)
    const node = lookup ?? graph.rootNode

    return node ? (
      <DndProvider backend={HTML5Backend}>
        <ActiveProvider value={node}>
          <NodeLayout node={node}>
            <EdgeList node={node} edgeTag="child" outer />
          </NodeLayout>
        </ActiveProvider>
      </DndProvider>
    ) : null
  },
)
