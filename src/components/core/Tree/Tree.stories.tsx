import Tree, { TreeProps } from '.';

const data = [
  {
    id: 'SE1068',
    label: 'John Doe',
    action: () => { },
    extra: {},
    tooltip: 'John Doe',
    children: [],
  }
];

const Template = () => <Tree values={data} floor={0} />;

export const Example = Template.bind({});

const StoryObject = {
  title: 'core/Tree',
  component: Example,
};

export default StoryObject;
