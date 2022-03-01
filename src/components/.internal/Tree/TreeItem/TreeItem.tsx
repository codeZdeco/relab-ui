import TreeItemProps from './TreeItem.d';
import Tree from '../../../core/Tree';
import { ListItemButton, ListItemText, Tooltip, Collapse, IconButton } from '@mui/material';
import { MouseEventHandler, useState } from 'react';

function TreeItem(props: TreeItemProps) {
  const [open, setOpen] = useState(false);
  const { valueProps, treeProps } = props;
  const { label, children, tooltip } = valueProps;
  const { tooltip: isTooltip, icon } = treeProps;

  const hasChildren = !!children && !!children.length;

  const handleClick = (event: MouseEventHandler<HTMLButtonElement>) => {

  };

  const handleExpand = () => setOpen(true);

  const handleCollapse = () => setOpen(false);

  return (
    <>
      <ListItemButton {...props}>
        <Tooltip title={tooltip ? tooltip : ''}>
          <ListItemText primary={label} />
        </Tooltip>
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
              {...treeProps}
            />
          </Collapse>
        )
      }
    </>
  );
}

export default TreeItem;
