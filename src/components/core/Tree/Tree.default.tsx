import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { TreeProps } from '.';

const TreeDefaultProps: TreeProps = {
  values: [],
  tooltip: true,
  draggable: true,
  droppable: true,
  floor: 0,
  padding: 4,
  icon: {
    expand: <ExpandMore />,
    collapse: <ExpandLess />,
  },
  mapper: {
    id: 'id',
    label: 'label',
    action: 'action',
    extra: 'extra',
    tooltip: 'tooltip',
    icon: 'icon',
    children: 'children',
    disabled: 'disabled',
  }
};

export default TreeDefaultProps;
