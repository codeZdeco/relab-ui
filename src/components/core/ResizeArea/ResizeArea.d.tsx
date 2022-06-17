import { CSSProperties } from '@mui/styled-engine';
import { ReactNode } from 'react';
import { BoxProps } from '@mui/material';

export interface ResizeAreaCSSProperties {
  root?: string;
}

export interface SizeProps {
  width: number | string;
  height: number | string;
}

/** TODO: Support ne, nw, se, sw */
export interface GetBarStylesFunc {
  (
    direction: ('n' | 'e' | 's' | 'w'),
    overrideStyles: CSSProperties
  ): CSSProperties;
}

interface ResizeAreaProps extends BoxProps {
  direction: ('n' | 'w' | 'e' | 's');
  children: ReactNode;
  BarProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  classes?: ResizeAreaCSSProperties;
  minWidth?: number;
  minHeight?: number;
}

export default ResizeAreaProps;
