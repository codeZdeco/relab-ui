import ContextMenuProps from "./ContextMenu.d";

const ContextMenuDefaultProps: ContextMenuProps = {
  values: [],
  anchor: 'top-start',
  anchorEl: null,
  open: false,
  width: 250,
  flexAnchor: {
    dividerHeight: 17,
    itemHeight: 36,
  },
};

export default ContextMenuDefaultProps;
