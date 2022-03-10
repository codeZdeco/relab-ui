import TreeItemProps, { TreeItemTextProps } from './TreeItem.d';
import Tree from '../../../core/Tree';
import { ListItemButton, ListItemText, Tooltip, Collapse, IconButton, ListItemIcon } from '@mui/material';
import React, { useState } from 'react';
import _ from '../../../../@lodash';

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
  const { label, children, tooltip, action, extra, icon: itemIcon } = ValueProps;
  const { tooltip: isTooltip, icon, floor, padding, defaultItem } = TreeProps;

  const hasChildren = !!children && !!children.length;

  const evenProps = _.overrideMouseEvents(ValueProps, props);

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    action && action(event, extra);
    !!!action && defaultItem && defaultItem.action && defaultItem.action(event, extra);
    props.onClick && props.onClick(event, ValueProps);
  };

  const handleExpand = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleCollapse = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen(false);
  };

  /**
   * Calculate child padding
   * @returns CSSProps
   */
  const calChildPadding = (): React.CSSProperties => {
    const childPadding = padding ? padding * floor : 0;
    const paddingProps = {
      paddingLeft: childPadding,
    };

    return paddingProps;
  };

  return (
    <>
      <ListItemButton
        {...props}
        sx={calChildPadding()}
        className='TreeItem-root'
        {...evenProps}
        onClick={handleItemClick}
      >
        {
          (itemIcon || (defaultItem && defaultItem.icon)) && (
            <ListItemIcon>
              {itemIcon || (defaultItem && defaultItem.icon)}
            </ListItemIcon>
          )
        }
        <TreeItemText
          title={tooltip ? tooltip : ((defaultItem && defaultItem?.tooltip) || '')}
          tooltip={!!isTooltip}
          label={label}
        />
        {
          hasChildren && (
            open ? (
              <IconButton size='small' onClick={handleCollapse}>
                {icon?.collapse}
              </IconButton>
            ) : (
              <IconButton size='small' onClick={handleExpand}>
                {icon?.expand}
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
              items={children}
            />
          </Collapse>
        )
      }
    </>
  );
}

export default TreeItem;
