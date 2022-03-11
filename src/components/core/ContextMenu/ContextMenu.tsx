import ContextMenuProps, { MenuValueProps } from "./ContextMenu.d";
import { withStyles } from '@mui/styles';
import styles from './ContextMenu.styles';
import {
  Popper,
  Paper,
  MenuList,
  Divider,
} from '@mui/material';
import { ContextMenuItem } from '../../.internal/ContextMenu';
import ContextMenuDefaultProps from "./ContextMenu.default";

function ContextMenu(props: ContextMenuProps) {
  const { open, anchorEl, anchor, width, values } = props;

  const isFixedPosition = typeof anchor !== 'string';

  const renderMenuItem = (value: (MenuValueProps | null)) => {
    const isDivider = value === null;

    return isDivider ? <Divider /> : (
      <ContextMenuItem key={value.label} MenuProps={props} ValueProps={value} />
    );
  };

  return (
    <Popper
      open={open}
      anchorEl={!isFixedPosition ? anchorEl : null}
      placement={!isFixedPosition ? anchor : undefined}
      style={isFixedPosition ? anchor : {}}
      transition
    >
      <Paper {...props} sx={{ width }}>
        <MenuList>
          {
            values.map(renderMenuItem)
          }
        </MenuList>
      </Paper>
    </Popper>
  );
}

ContextMenu.defaultProps = ContextMenuDefaultProps;

export default withStyles(styles)(ContextMenu);
