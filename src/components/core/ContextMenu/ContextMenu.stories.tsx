import { MouseEvent, useState } from 'react';
import ContextMenu from './ContextMenu';
import ContextMenuProps, { MenuValueProps, AnchorProps } from './ContextMenu.d';

const values: Array<MenuValueProps | null> = [
  {
    label: 'Create',
  },
  null,
  {
    label: 'Rename',
  },
  {
    label: 'Pinned',
    children: [
      {
        label: 'Folder 1'
      }
    ]
  }
]

const Template = (props: ContextMenuProps) => <ContextMenu {...props} />;

const RightClickSample = () => {
  const [anchor, setAnchor] = useState<AnchorProps>({
    top: 0,
    left: 0,
  });
  const [open, setOpen] = useState(false);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchor({
      top: event.clientY,
      left: event.clientX,
    });
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <div
      style={{ width: 600, height: 400, border: '1px solid black' }}
      onContextMenu={handleOpenMenu}
    >
      <Template
        values={values}
        open={open}
        anchor={anchor}
        onClose={handleCloseMenu}
      />
    </div>
  );
}

export const RightClickContextMenuSample = RightClickSample.bind({});

const StoryObject = {
  title: 'core/ContextMenu',
  component: Template,
}

export default StoryObject;
