import { withStyles } from '@mui/styles';
import { List } from '@mui/material';
import { TreeProps, TreeStyles, TreeDefaultProps } from '@relab-ui/core/Tree';

function Tree(props: TreeProps) {
  const {
    values,
    floor,
    classes
  } = props;

  return <div className={classes?.root}>Tree</div>;
}

Tree.defaultProps = TreeDefaultProps;

export default withStyles(TreeStyles)((Tree));
