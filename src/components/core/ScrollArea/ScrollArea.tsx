import { withStyles } from '@mui/styles';
import styles from './ScrollArea.styles';
import ScrollAreaProps from './ScrollArea.d';
import clsx from 'clsx';

function ScrollArea(props: ScrollAreaProps) {
  const { classes, children, className } = props;
  return (
    <div {...props} className={clsx(classes && classes?.root, className)}>
      {children}
    </div>
  );
}

export default withStyles(styles)(ScrollArea);
