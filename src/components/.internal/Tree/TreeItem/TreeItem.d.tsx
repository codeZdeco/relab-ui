import { TreeValueProps, TreeProps } from '../../../core/Tree';

export interface TreeItemTextProps {
  tooltip: boolean;
  label: string | React.ReactNode;
  title: string;
}

interface TreeItemProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  ValueProps: TreeValueProps;
  TreeProps: TreeProps;
}

export default TreeItemProps;
