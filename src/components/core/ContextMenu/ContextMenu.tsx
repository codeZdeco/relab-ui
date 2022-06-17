import { useRef, useMemo, CSSProperties } from 'react';
import ContextMenuProps, { MenuValueProps, AnchorProps } from "./ContextMenu.d";
import { withStyles } from '@mui/styles';
import styles from './ContextMenu.styles';
import {
  Popper,
  Paper,
  MenuList,
  Divider,
  ClickAwayListener,
} from '@mui/material';
import { ContextMenuItem } from 'components/internal/ContextMenu';
import ContextMenuDefaultProps from "./ContextMenu.default";

const reassignAnchor = (
  basePosition: number,
  boundSize: number,
  size: number
) => {
  return basePosition + size > boundSize ? basePosition - size : basePosition;
};

function ContextMenu(props: ContextMenuProps) {
  const MenuRef = useRef<HTMLDivElement>(null);
  const BounderRef = useRef<HTMLDivElement>(null);
  const {
    open,
    anchorEl,
    anchor,
    width,
    values,
    onClose: handleClose,
    classes,
    flexAnchor: flexAnchorHeight,
  } = props;

  const isFixedPosition = typeof anchor !== 'string';

  const renderMenuItem = (value: (MenuValueProps | null)) => {
    const isDivider = value === null;

    return isDivider ? <Divider /> : (
      <ContextMenuItem key={value.label} MenuProps={props} ValueProps={value} />
    );
  };

  const flexAnchor: CSSProperties = useMemo(() => {
    const { current: menuRef } = MenuRef;

    if (menuRef && isFixedPosition) {
      const flexTop = reassignAnchor((anchor as AnchorProps).top, window.innerHeight, menuRef.scrollHeight);
      const flexLeft = reassignAnchor((anchor as AnchorProps).left, window.innerWidth, menuRef.scrollWidth);

      return {
        top: flexTop,
        left: flexLeft,
      };
    } else if (isFixedPosition && flexAnchorHeight) {
      const dividerNum = values.filter((value: (MenuValueProps | null)) => value === null).length;
      const itemNum = values.length - dividerNum;

      const flexTop = reassignAnchor((anchor as AnchorProps).top, window.innerHeight, flexAnchorHeight?.itemHeight * itemNum + flexAnchorHeight?.dividerHeight * dividerNum + 16);
      const flexLeft = reassignAnchor((anchor as AnchorProps).left, window.innerWidth, width as number);

      return {
        top: flexTop,
        left: flexLeft,
      };
    }

    if (isFixedPosition) return anchor;

    return {};
  }, [isFixedPosition, flexAnchorHeight, anchor, values, width]);

  return (
    <Popper
      className={classes && classes.root}
      open={open}
      ref={BounderRef}
      anchorEl={!isFixedPosition ? anchorEl : null}
      placement={!isFixedPosition ? anchor : undefined}
      style={isFixedPosition ? flexAnchor : {}}
    >
      <ClickAwayListener onClickAway={handleClose ? handleClose : () => { }}>
        <Paper {...props} sx={{ width }} ref={MenuRef}>
          <MenuList>
            {
              values.map(renderMenuItem)
            }
          </MenuList>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
}

ContextMenu.defaultProps = ContextMenuDefaultProps;

export default withStyles(styles)(ContextMenu);
