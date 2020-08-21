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
import { Instance } from 'mobx-state-tree'
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDownOutlined'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import FlipToBackIcon from '@material-ui/icons/FlipToBackOutlined'
import FolderIcon from '@material-ui/icons/FolderOutlined'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'
import CropFreeIcon from '@material-ui/icons/CropFreeOutlined'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { useGraph, Node } from 'graph'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'inherit',
    },
    buttonGroup: {
      color: 'inherit',
      '& .MuiButtonGroup-groupedTextHorizontal': {
        borderRight: 'unset',
      },
      '& .MuiButtonGroup-grouped': {
        minWidth: 'unset',
      },
    },
    selectButton: {
      color: 'inherit',
      paddingRight: theme.spacing(1) / 2,
    },
    dropButton: {
      color: 'inherit',
      padding: 0,
    },
    deleteButton: {
      color: theme.palette.error.main,
    },
    popper: {
      '& svg': {
        marginRight: theme.spacing(1),
      },
    },
  }),
)

interface SelectButtonProps {
  node: Instance<typeof Node>
  onClick: React.MouseEventHandler
  className?: string
}

export const SelectButton: React.FunctionComponent<SelectButtonProps> = ({
  node,
  className,
  onClick,
}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)

  return useGraph(graph => (
    <div className={[classes.root, className].join(' ')}>
      <ButtonGroup
        variant="text"
        ref={anchorRef}
        aria-label="split button"
        className={classes.buttonGroup}
      >
        <Button
          startIcon={<CropFreeIcon />}
          onClick={onClick}
          className={classes.selectButton}
        >
          select
        </Button>
        <Button
          size="small"
          disabled={graph.selectedNodes.size === 0}
          aria-controls={open ? 'select-button' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={() => setOpen(value => !value)}
          className={classes.dropButton}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        disablePortal
        className={classes.popper}
      >
        {({ placement }) => {
          graph.setCursorNode(node)
          return (
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <Paper>
                <MenuList id="select-button">
                  <MenuItem
                    onClick={() => {
                      graph.moveSelectedNodes()
                      setOpen(false)
                    }}
                  >
                    <FolderIcon />
                    Move here
                  </MenuItem>

                  <MenuItem
                    disabled
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <FileCopyIcon />
                    Copy here
                  </MenuItem>

                  <MenuItem
                    divider
                    onClick={() => {
                      graph.linkSelectedNodes()
                      setOpen(false)
                    }}
                  >
                    <FlipToBackIcon />
                    Link here
                  </MenuItem>

                  {/* <MenuItem */}
                  {/*   onClick={() => { */}
                  {/*     graph.deleteSelectedNodes() */}
                  {/*     setOpen(false) */}
                  {/*   }} */}
                  {/*   className={classes.deleteButton} */}
                  {/* > */}
                  {/*   <DeleteIcon /> */}
                  {/*   Delete */}
                  {/* </MenuItem> */}

                  <MenuItem
                    onClick={() => {
                      graph.removeSelectedNodes()
                      setOpen(false)
                    }}
                    className={classes.deleteButton}
                  >
                    <DeleteIcon />
                    Remove
                  </MenuItem>
                </MenuList>
              </Paper>
            </ClickAwayListener>
          )
        }}
      </Popper>
    </div>
  ))
}