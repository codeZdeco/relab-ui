import { CSSProperties } from '@mui/styled-engine';
import { ReactNode } from 'react';

export interface ResizeAreaCSSProperties {
  root?: string;
}

export interface SizeProps {
  width: number | string;
  height: number | string;
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
  barProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  classes?: ResizeAreaCSSProperties;
  minWidth?: number;
  minHeight?: number;
}

export default ResizeAreaProps;
