import Tree from './Tree';
import TreeProps from './Tree.d';

const Template = (props: TreeProps) => <Tree {...props} />;

function Sample(args: TreeProps) {
  return <Template {...args} />;
}

export const Example = Sample.bind({
  /** TODO: Add arguments here */
});

const StoryObject = {
  title: 'core/Tree',
  component: Sample,
};

export default StoryObject;
