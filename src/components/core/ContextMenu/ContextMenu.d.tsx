import { BaseHTMLAttributes, CSSProperties, MouseEvent } from "react";

export interface MenuValueProps {
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  action?: (event: MouseEvent<HTMLElement>, extra: any) => void;
  children?: Array<MenuValueProps>;
  extra?: any;
}

export interface AnchorProps {
  top: number;
  left: number;
}

interface ContextMenuProps extends BaseHTMLAttributes<HTMLElement> {
  values: Array<MenuValueProps | null>;
  open: boolean;
  anchor: (CSSProperties | ('left' | 'left-start' | 'left-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end'));
  anchorEl?: HTMLElement | (() => HTMLElement) | null | undefined;
  width?: number | string;
  onClose?: (event: any) => void;
}

export default ContextMenuProps;
