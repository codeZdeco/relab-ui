import TreeItemProps, { TreeItemTextProps } from './TreeItem.d';
import Tree from '../../../core/Tree';
import { ListItemButton, ListItemText, Tooltip, Collapse, IconButton } from '@mui/material';
import React, { MouseEventHandler, useState } from 'react';

function TreeItemText(props: TreeItemTextProps) {
  const { tooltip, title, label } = props;

  return (
    tooltip ? (
      <Tooltip title={title ? title : ''}>
        <ListItemText primary={label} />
      </Tooltip>
    ) : (
      <ListItemText primary={label} />
    )
  );
}

function TreeItem(props: TreeItemProps) {
  const [open, setOpen] = useState(false);
  const { ValueProps, TreeProps } = props;
  const { label, children, tooltip } = ValueProps;
  const { tooltip: isTooltip, icon } = TreeProps;

  const hasChildren = !!children && !!children.length;

  const handleClick = (event: any): void => {

  };

  const handleExpand = () => setOpen(true);

  const handleCollapse = () => setOpen(false);

  return (
    <>
      <ListItemButton
        {...props}
        onClick={handleClick}
      >
        <TreeItemText
          title={tooltip ? tooltip : ''}
          tooltip={!!isTooltip}
          label={label}
        />
        {
          hasChildren && (
            open ? (
              <IconButton size='small' onClick={handleExpand}>
                {icon?.expand}
              </IconButton>
            ) : (
              <IconButton size='small' onClick={handleCollapse}>
                {icon?.collapse}
              </IconButton>
            )
          )
        }
      </ListItemButton>
      {
        hasChildren && (
          <Collapse in={open}>
            <Tree
              {...TreeProps}
            />
          </Collapse>
        )
      }
    </>
  );
}

export default TreeItem;
