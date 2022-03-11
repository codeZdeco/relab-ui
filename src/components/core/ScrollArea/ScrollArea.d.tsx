export interface ScrollAreaCSSProperties {
  root?: string;
}

interface ScrollAreaProps extends React.BaseHTMLAttributes<HTMLElement> {
  classes?: ScrollAreaCSSProperties;
}

export default ScrollAreaProps;
