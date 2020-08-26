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

import { types, IAnyType } from 'mobx-state-tree'

import { Note } from 'note'

import { nodeFactory, edgeMapFactory, Config } from 'graph'

export const Node = nodeFactory([
  nodeFactory(Note),
  edgeMapFactory(() =>
    types.union(
      types.late((): IAnyType => Node),
      nodeFactory(Config),
    ),
  ),
]).views(self => ({
  get childCount(): number {
    return self.edgeMap.get('child')?.length ?? 0
  },

  // get createDate(): Date {
  //   return self.events[0]?.date
  // },
}))
