import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { TreeProps } from '.';

const TreeDefaultProps = {
  tooltip: true,
  draggable: true,
  droppable: true,
  floor: 0,
  padding: 4,
  icon: {
    expand: <ExpandMore />,
    collapse: <ExpandLess />,
  },
} as TreeProps;

export default TreeDefaultProps;
