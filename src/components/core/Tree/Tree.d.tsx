import { ExtendButtonBase, ExtendList, ListItemButtonTypeMap, ListTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface TreeCSSProperties {
  root?: string;
}

export interface TreeValueProps {
  id: string | number;
  label: string | React.ReactNode;
  action: ((event: React.MouseEvent<HTMLElement>, extra: any) => void);
  extra?: any;
  tooltip?: string;
  icon?: (React.ReactNode | ((extra: any) => React.ReactNode));
  disabled?: (boolean | ((extra: any) => boolean));
  children?: Array<TreeValueProps>;
}

interface TreeProps extends React.BaseHTMLAttributes<HTMLUListElement> {
  values: Array<TreeValueProps>;
  floor: number;
  tooltip?: boolean;
  selectable?: boolean;
  draggable?: boolean;
  droppable?: boolean;
  childPadding?: number;
  icon?: {
    expand?: React.ReactNode;
    collapse?: React.ReactNode;
  };
  classes?: TreeCSSProperties;
}

export default TreeProps;
