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

import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { IAnyStateTreeNode, Instance } from 'mobx-state-tree'

import { useGraph, Node } from 'graph'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    itemText: { margin: 0 },
  }),
)

const getLabel = (item: IAnyStateTreeNode): string => item.label ?? item.id

interface NodeListItemProps {
  node: Instance<typeof Node>
  onClick?: React.EventHandler<React.SyntheticEvent>
  editable?: boolean
}

const NodeListItem: React.FunctionComponent<NodeListItemProps> = ({
  node,
  onClick,
  ...props
}) => {
  const classes = useStyles()
  return useGraph(graph => {
    const handleDoubleClick = (): void => {
      if (!props.editable) {
        return
      }

      console.log('node list item double click')
    }

    return (
      <ListItem
        onClick={onClick}
        onDoubleClick={handleDoubleClick}
        className={classes.root}
        button
        dense
      >
        <ListItemText className={classes.itemText} primary={getLabel(node)} />
      </ListItem>
    )
  })
}

NodeListItem.defaultProps = {
  editable: true,
}

export default NodeListItem
