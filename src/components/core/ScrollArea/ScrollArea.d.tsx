import { BoxProps } from '@mui/material';

export interface ScrollAreaCSSProperties {
  root?: string;
}

interface ScrollAreaProps extends BoxProps {
  classes?: ScrollAreaCSSProperties;
}

export default ScrollAreaProps;
