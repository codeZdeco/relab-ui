import { withStyles } from '@mui/styles';
import { Box } from '@mui/material';
import styles from './ScrollArea.styles';
import ScrollAreaProps from './ScrollArea.d';
import clsx from 'clsx';

function ScrollArea(props: ScrollAreaProps) {
  const { classes, children, className } = props;
  return (
    <Box {...props} className={clsx(classes && classes?.root, className)}>
      {children}
    </Box>
  );
}

export default withStyles(styles)(ScrollArea);
