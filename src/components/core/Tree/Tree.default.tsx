import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { TreeProps } from '.';

const mapper = {};

const fields = [
  'id',
  'label',
  'action',
  'extra',
  'tooltip',
  'icon',
  'children',
  'disabled'
];

fields.map((field: string) => {
  Object.assign(mapper, {
    [field]: field,
  });
  return field;
})

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
  mapper,
};

export default TreeDefaultProps;
