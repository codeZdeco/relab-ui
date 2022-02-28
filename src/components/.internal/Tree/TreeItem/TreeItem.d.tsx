import { TreeValueProps, TreeProps } from '@relab-ui/core/Tree';

interface TreeItemProps extends React.BaseHTMLAttributes<HTMLLIElement> {
  itemProps: TreeValueProps;
  treeProps?: TreeProps;
  hasChildren?: boolean;
}

export default TreeItemProps;
