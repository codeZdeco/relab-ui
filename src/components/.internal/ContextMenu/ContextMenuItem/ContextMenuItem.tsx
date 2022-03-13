import ContextMenuItemProps from "./ContextMenuItem.d";
import {
  MenuItem,
  ListItemIcon,
  Typography,
  ClickAwayListener,
  ListItemText,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MouseEvent, useState, useRef } from "react";
import ContextMenu from '../../../core/ContextMenu';

function ContextMenuItem(props: ContextMenuItemProps) {
  const { MenuProps, ValueProps } = props;
  const [open, setOpen] = useState(false);
  const MenuItemRef = useRef(null);
  const { children, icon, label, shortcut, action, extra } = ValueProps;

  const hasChildren = !!children && !!children.length;

  const handleCloseMenu = (event: TouchEvent | globalThis.MouseEvent) => {
    event.stopPropagation();
    setOpen(false);
  };

  const handleToggleMenu = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    !hasChildren && action && action(event, extra);
    hasChildren && handleToggleMenu(event);
  };

  return (
    <>
      <MenuItem onClick={handleClick} ref={MenuItemRef}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText>
          <Typography variant='inherit' noWrap>
            {label}
          </Typography>
        </ListItemText>
        <Typography variant='body2' color='text.secondary'>
          {hasChildren ? (<ChevronRightIcon />) : shortcut}
        </Typography>
      </MenuItem>
      {
        hasChildren && (
          <ClickAwayListener onClickAway={handleCloseMenu}>
            <ContextMenu
              {...MenuProps}
              open={open}
              values={children}
              anchorEl={MenuItemRef.current}
              anchor='right-start'
            />
          </ClickAwayListener>
        )
      }
    </>
  );
}

export default ContextMenuItem;
