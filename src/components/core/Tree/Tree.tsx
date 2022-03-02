import { withStyles } from '@mui/styles';
import { List } from '@mui/material';
import { TreeProps, TreeStyles, TreeDefaultProps, TreeValueProps } from '.';
import TreeItem from '../../.internal/Tree/TreeItem';

function Tree(props: TreeProps & typeof TreeDefaultProps) {
  const { values, classes, floor, ItemProps } = props;

  const renderTreeItem = (value: TreeValueProps): React.ReactNode => {
    const { id, children } = value;
    const customTreeProps = Object.assign(props, {
      floor: floor + 1,
      values: children ? children : [],
    });

    return (
      <TreeItem key={id} ValueProps={value} TreeProps={customTreeProps} {...ItemProps} />
    );
  };

  return (
    <List
      dense
      {...props}
      className={classes?.root}
    >
      {values?.map(renderTreeItem)}
    </List>
  );
}

Tree.defaultProps = TreeDefaultProps;

export default withStyles(TreeStyles)((Tree));
