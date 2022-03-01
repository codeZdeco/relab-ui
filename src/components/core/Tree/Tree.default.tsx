import { ExpandLess, ExpandMore } from '@mui/icons-material';

const TreeDefaultProps = {
  tooltip: true,
  draggable: true,
  droppable: true,
  floor: 0,
  childPadding: 4,
  icon: {
    expand: <ExpandMore />,
    collapse: <ExpandLess />,
  },
};

export default TreeDefaultProps;
