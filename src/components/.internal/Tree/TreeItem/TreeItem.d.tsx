import { TreeValueProps, TreeProps } from '../../../core/Tree';

interface TreeItemProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  valueProps: TreeValueProps;
  treeProps: TreeProps;
}

export default TreeItemProps;
