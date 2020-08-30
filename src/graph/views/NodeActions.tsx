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
import {
  Toolbar,
  IconButton,
  Fab,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import SearchIcon from '@material-ui/icons/Search'
import TuneIcon from '@material-ui/icons/Tune'
import GroupIcon from '@material-ui/icons/Group'
import { Instance } from 'mobx-state-tree'

import { SelectButton } from 'select'
import { Node, useGraph } from 'graph'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: 'center',
    },

    insertButton: {
      background: `radial-gradient(circle at bottom, ${theme.palette.secondary.main}, ${theme.palette.primary.main} 75%)`,
      margin: theme.spacing(0, 2, 0, 2),
      boxShadow: 'unset',
      '&:active': {
        boxShadow: 'unset',
      },
    },
  }),
)

interface NodeActionsProps {
  node: Instance<typeof Node>
  className?: string
}

export const NodeActions: React.FunctionComponent<NodeActionsProps> = ({
  node,
  className,
}) => {
  const classes = useStyles()

  return useGraph(graph => {
    const hasChildren = node.childCount > 0
    const selectedCount = graph.selectedNodes.size ?? 0

    return (
      <Toolbar
        disableGutters
        variant="dense"
        className={[classes.root, className].join(' ')}
      >
        <>
          <IconButton
            disabled
            /* color={graph.activeModes.includes('edit') ? 'primary' : undefined} */
            onClick={() => graph.toggleActiveMode('search')}
          >
            <SearchIcon />
          </IconButton>

          <IconButton
            disabled={!hasChildren}
            color={graph.activeModes.includes('edit') ? 'primary' : undefined}
            onClick={() => graph.toggleActiveMode('edit')}
          >
            <EditIcon />
          </IconButton>

          <Fab
            color="primary"
            onClick={() => {
              graph.setActiveMode('insert')
              graph.setActiveMode('edit')
            }}
            className={classes.insertButton}
          >
            <AddIcon />
          </Fab>

          <SelectButton
            disabled={!(hasChildren || selectedCount > 0)}
            node={node}
            color={graph.activeModes.includes('select') ? 'primary' : undefined}
            onClick={() => {
              graph.toggleActiveMode('select')
            }}
          />

          <IconButton disabled onClick={() => graph.toggleActiveMode('edit')}>
            <TuneIcon />
          </IconButton>

          {false && (
            <Button
              disabled
              startIcon={<GroupIcon />}
              onClick={() => {
                if (graph.activeModes.includes('share')) {
                  graph.closePeerConnection()
                } else {
                  graph.offerPeerConnection(node)
                }
              }}
              color={
                graph.activeModes.includes('share') ? 'primary' : undefined
              }
            >
              share
            </Button>
          )}
        </>
      </Toolbar>
    )
  })
}
