import Tree, { TreeProps } from '.';

const Template = (props: TreeProps) => <Tree {...props} />;

// function Sample(args: TreeProps) {
//   return <Template {...args} />;
// }

export const Example = Template.bind({
  /** TODO: Add arguments here */
  floor: 0,
  values: [],
});

const StoryObject = {
  title: 'core/Tree',
  component: Example,
};

export default StoryObject;
