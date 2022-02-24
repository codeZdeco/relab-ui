import { CSSProperties } from '@mui/styled-engine';
import { ReactNode } from 'react';

export interface ResizeAreaCSSProperties {
  root?: CSSProperties;
  bar?: CSSProperties;
}

export interface SizeProps {
  width: number;
  height: number;
}

export interface GetBarStylesFunc {
  (
    direction: ('n' | 'e' | 's' | 'w'),
    overrideStyles: CSSProperties
  ): CSSProperties;
}

interface ResizeAreaProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  direction: ('n' | 'w' | 'e' | 's');
  children: ReactNode;
  classes?: ResizeAreaCSSProperties;
  minWidth?: number;
  minHeight?: number;
}

export default ResizeAreaProps;
