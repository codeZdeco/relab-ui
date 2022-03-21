import { TreeValueProps, TreeProps } from '_core/Tree';
import { Modify } from '../../../.global/commons.d';
import { OverrideMouseEvent } from '../../../.global/events.d';

export interface TreeItemTextProps {
  tooltip: boolean;
  label: string | React.ReactNode;
  title: string;
}

interface TreeItemProps extends Modify<React.BaseHTMLAttributes<HTMLDivElement>, OverrideMouseEvent> {
  ValueProps: TreeValueProps;
  TreeProps: TreeProps;
}

export default TreeItemProps;
