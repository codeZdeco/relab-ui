export interface TreeCSSProperties {
  root?: string;
}

export interface TreeValueProps {
  id: string | number;
  /**
   * Show label
   */
  label: string | React.ReactNode;
  /**
   * Trigger onClick event on selected item
   */
  action: ((event: React.MouseEvent<HTMLElement>, extra: any) => void);
  /**
   * Extra information of item
   */
  extra?: any;
  /**
   * Show additional information when hovering
   */
  tooltip?: string;
  /**
   * Add specific icon for item
   */
  icon?: (React.ReactNode | ((extra: any) => React.ReactNode));
  /**
   * Disable mouse event on item
   */
  disabled?: (boolean | ((extra: any) => boolean));
  /**
   * Item's children for expanded view
   */
  children?: Array<TreeValueProps>;
}

interface TreeProps extends React.BaseHTMLAttributes<HTMLUListElement> {
  /**
   * List of item at same level
   */
  values: Array<TreeValueProps>;
  /**
   * Tree level
   * @default 0
   */
  floor: number;
  /**
   * Activate show tool if this value is true
   * @default true
   */
  tooltip?: boolean;
  /**
   * Activate highlight when select on an item
   * @default true
   */
  selectable?: boolean;
  /**
   * Allow to drag item
   * @default true
   */
  draggable?: boolean;
  /**
   * Allow to drop item
   * @default true
   */
  droppable?: boolean;
  /**
   * Padding left for item
   * @default 4
   */
  childPadding?: number;
  /**
   * Icon for expand and collapse
   * @default Object
   * expand <>
   * collapse <>
   */
  icon?: {
    expand?: React.ReactNode;
    collapse?: React.ReactNode;
  };
  itemProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  classes?: TreeCSSProperties;
}

export default TreeProps;
