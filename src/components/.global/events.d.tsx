export interface OverrideMouseEvent {
  onClick?: (event?: React.MouseEvent<HTMLElement>, value?: any) => void;
  onDoubleClick?: (event?: React.MouseEvent<HTMLElement>, value?: any) => void;
  onContextMenu?: (event?: React.MouseEvent<HTMLElement>, value?: any) => void;
  onDrop?: (event?: React.MouseEvent<HTMLElement>, value?: any) => void;
  onDrag?: (event?: React.MouseEvent<HTMLElement>, value?: any) => void;
  onDropCapture?: (event?: React.MouseEvent<HTMLElement>, value?: any) => void;
  onDragStart?: (event?: React.MouseEvent<HTMLElement>, value?: any) => void;
  onDragEnd?: (event?: React.MouseEvent<HTMLElement>, value?: any) => void;
  onDragOver?: (event?: React.MouseEvent<HTMLElement>, value?: any) => void;
}
