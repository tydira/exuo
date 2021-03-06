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
import {
  Collapse,
  Button,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import { createStyles, makeStyles, fade, Theme } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { Instance } from 'mobx-state-tree'
import { useDrag, useDrop, XYCoord } from 'react-dnd'

import { navigate } from 'exuo/src/route'
import { NoteEditor } from 'exuo/src/note'
import { useGraph, Node, EdgeList, useActive } from 'exuo/src/graph'

const isEditingBorderSelector = `&.isEditing, &.isEditing + li,\
  &.isEditing + .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > .MuiListItem-container:first-child`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemContainer: {
      borderTop: `.1px solid ${theme.palette.divider}`,
      background: theme.palette.background.default,

      [isEditingBorderSelector]: {
        borderTop: `.1px solid transparent`,

        // TODO Active cursor effect remains?
        // Make it less apparent for now.
        background: 'unset !important',
      },

      transition: theme.transitions.create(['color', 'background', 'border'], {
        duration: theme.transitions.duration.shortest,
      }),

      // TODO Mode stuff is boggled.
      cursor: 'pointer',

      '&:hover': {
        color: theme.palette.primary.main,
        background: theme.palette.background.paper,
      },

      '&.isEditing, .editMode &, .selectMode &': {
        cursor: 'default',
        color: 'unset',
      },
    },

    listItem: {
      position: 'relative',

      '&.Mui-selected': {
        background: `
          linear-gradient(
            to top,
            ${fade(theme.palette.background.default, 0)},
            ${fade(theme.palette.background.default, 0.9)} \
              ${theme.spacing(1) / 2}px calc(100% - ${theme.spacing(1) / 2}px),
            ${fade(theme.palette.background.default, 0)}
          ),
          linear-gradient(
            to right,
            ${theme.palette.primary.main},
            ${theme.palette.secondary.main} 
          )
        `,

        '&:hover': { color: 'unset' },
        '& a:hover': { color: 'unset' },
      },
    },

    childList: {
      marginLeft: theme.spacing(4),
      padding: 0,
    },

    itemText: {
      margin: 0,

      '.isDragging &': {
        opacity: 0,
      },

      /* '&, & .MuiListItemText-secondary': { */
      /*   overflowX: 'hidden', */
      /*   whiteSpace: 'nowrap', */
      /*   textOverflow: 'ellipsis', */
      /* }, */

      '& .MuiListItemText-primary': {
        display: 'inline',
      },

      '& .MuiListItemText-secondary': {
        paddingLeft: theme.spacing(1),
      },

      '&.expand': {
        '& .MuiListItemText-secondary': {
          display: 'block',
          paddingLeft: 0,
        },
      },
    },

    listItemSelectCheckbox: {
      padding: theme.spacing(0, 1, 0, 1),
      '&:hover, &.Mui-checked:hover': {
        backgroundColor: 'unset',
      },
    },

    listItemIcon: {
      minWidth: 'auto',
    },

    noteEditor: {
      // Account for layout's bottom toolbar
      marginBottom: theme.spacing(8) + 1,
      zIndex: theme.zIndex.appBar,

      cursor: 'default',
      position: 'absolute',
      top: 0,
      left: 0,
    },

    noteEditorInput: {
      cursor: 'text',
    },

    secondaryActions: {
      display: 'none',

      '.isDragging &': {
        opacity: 0,
      },

      '&.hasChild, .selectMode &': {
        display: 'unset',
      },

      right: 0,
    },

    edgeArrow: {
      cursor: 'default',
      color: theme.palette.text.hint,

      '&:hover': {
        background: 'inherit',
      },

      '.isExpanded &': {
        color: theme.palette.text.primary,
      },

      '.selectMode &': {
        cursor: 'pointer',
        '&:hover': {
          color: theme.palette.primary.main,
        },
      },

      transition: theme.transitions.create(['color'], {
        duration: theme.transitions.duration.shortest,
      }),

      // Ensure ChevronRight lines up without a label
      minWidth: 'unset',

      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
  }),
)

interface DragItem {
  type: string
  index: number
  path: string
  parentNode: Instance<typeof Node>
  childNode: Instance<typeof Node>
}

interface NodeListItemProps {
  node: Instance<typeof Node>
  parentNode: Instance<typeof Node>
  expandSecondaryTypography?: boolean
  className?: string
  index: number
  moveItem: (item: DragItem, dragIndex: number, hoverIndex: number) => void
  onContextMenu?: React.EventHandler<React.MouseEvent>
}

export const NodeListItem: React.FunctionComponent<NodeListItemProps> = observer(
  ({
    node,
    parentNode,
    expandSecondaryTypography,
    className,
    index,
    moveItem,
    onContextMenu,
  }) => {
    const classes = useStyles()
    const listItemRef = React.useRef<HTMLLIElement>(null)
    const graph = useGraph()
    const modes = graph.activeModes
    const active = useActive()
    const view = active.view

    const [isEditing, setIsEditing] = React.useState(false)
    const isSelected = graph.selectedNodes.get(parentNode.id)?.includes(node.id)
    const isExpanded =
      view?.getItem(`${parentNode.id}/${node.id}`)?.expanded ?? false

    const toggleExpand = (): void => {
      const view = active.initView()
      const item = view.initItem(`${parentNode.id}/${node.id}`)
      item.setExpanded(!item.expanded)
    }

    const handleArrowClick: React.EventHandler<React.MouseEvent> = e => {
      if (modes.includes('select') || e.metaKey) {
        navigate(`/node/${node.id}/`)
      } else {
        toggleExpand()
      }
    }

    const [, drop] = useDrop({
      accept: 'Node' + parentNode.id,

      hover(item: DragItem, monitor) {
        if (!listItemRef.current) {
          return
        }

        const dragIndex = item.index
        const hoverIndex = index

        if (dragIndex === hoverIndex) {
          return
        }

        const hoverBoundingRect = listItemRef.current?.getBoundingClientRect()
        const hoverMiddleY = hoverBoundingRect.height / 2

        const clientOffset = monitor.getClientOffset()
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }

        item.index = hoverIndex
        moveItem(item, dragIndex, hoverIndex)
      },
    })

    const [{ isDragging }, drag] = useDrag({
      canDrag: () => (isEditing ? false : true),

      item: {
        type: 'Node' + parentNode.id,
        path: `${parentNode.id}/${node.id}`,
        parentNode: parentNode,
        childNode: node,
        index,
      },

      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    })

    const handleItemClick = (e: React.MouseEvent): void => {
      e.preventDefault()

      if (isEditing) {
        return
      }

      if (e.altKey) {
        graph.setActiveMode('edit')
        setIsEditing(true)
      } else if (e.shiftKey) {
        setIsEditing(false)
        graph.setActiveMode('select')
        graph.toggleSelectNode(node, parentNode)
      } else if (e.metaKey) {
        navigate(`/node/${node.id}/`)
      } else if (modes.includes('select')) {
        graph.toggleSelectNode(node, parentNode)
      } else if (modes.includes('edit')) {
        setIsEditing(true)
      } else {
        navigate(`/node/${node.id}/`)
      }
    }

    let primaryText
    let secondaryText

    const rawContent = node.content?.toJSON?.()

    if (typeof node.content === 'string') {
      const newlineIndex = node.content.indexOf('\n')

      primaryText =
        newlineIndex > 0 ? node.content.slice(0, newlineIndex) : node.content
      secondaryText =
        newlineIndex > 0 ? node.content.slice(newlineIndex + 1) : undefined
    } else if (rawContent?.blocks) {
      for (const block of rawContent.blocks) {
        if (block.text === '') continue

        if (!primaryText) {
          primaryText = block.text
        } else if (!secondaryText) {
          secondaryText = block.text
        } else {
          break
        }
      }
    } else {
      primaryText = node.id
    }

    drag(drop(listItemRef))

    return (
      <>
        <ListItem
          ref={listItemRef}
          onClick={handleItemClick}
          selected={isSelected}
          className={classes.listItem}
          ContainerProps={{
            onContextMenu,
            className: [
              classes.listItemContainer,
              isExpanded ? 'isExpanded' : '',
              isDragging ? 'isDragging' : '',
              isEditing ? 'isEditing' : '',
              className,
            ].join(' '),
          }}
        >
          {isEditing && (
            <NoteEditor
              autoFocus
              text={rawContent ? undefined : node.content}
              rawContent={rawContent}
              className={classes.noteEditor}
              inputClassName={classes.noteEditorInput}
              onValue={value => {
                setIsEditing(false)
                if (value) {
                  if (typeof value === 'string') {
                    node.setContent(value)
                  } else if (Object.keys(value).includes('blocks')) {
                    node.setContent(value)
                  }
                }
              }}
              onEscape={() => {
                setIsEditing(false)
              }}
            />
          )}

          <ListItemText
            primary={primaryText}
            secondary={secondaryText}
            className={[
              classes.itemText,
              expandSecondaryTypography ? 'expand' : '',
            ].join(' ')}
          />

          <ListItemSecondaryAction
            className={[
              classes.secondaryActions,
              node.childCount > 0 ? 'hasChild' : '',
            ].join(' ')}
          >
            {
              <Button
                size="small"
                onClick={handleArrowClick}
                className={classes.edgeArrow}
                endIcon={
                  isExpanded ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />
                }
              >
                {node.childCount > 0 && node.childCount}
              </Button>
            }
          </ListItemSecondaryAction>
        </ListItem>

        {node.childCount > 0 && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <EdgeList
              node={node}
              edgeTag="child"
              className={classes.childList}
            />
          </Collapse>
        )}
      </>
    )
  },
)

NodeListItem.defaultProps = {
  expandSecondaryTypography: true,
}
