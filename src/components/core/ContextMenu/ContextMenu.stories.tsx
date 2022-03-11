import { MouseEvent, useState } from 'react';
import ContextMenu from './ContextMenu';
import ContextMenuProps, { MenuValueProps } from './ContextMenu.d';
import { ClickAwayListener } from '@mui/material';

const values: Array<MenuValueProps> = [
  {
    label: 'Create',
  },
  {
    label: 'Rename',
  }
]

const Template = (props: ContextMenuProps) => <ContextMenu {...props} />;

const RightClickSample = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {

  };

  const handleCloseMenu = () => setOpen(false);

  return (
    <div
      style={{ width: 600, height: 400, border: '1px solid black' }}
      onContextMenu={ }
    >
      <ClickAwayListener onClickAway={handleCloseMenu}>
        <Template />
      </ClickAwayListener>
    </div>
  )
}
