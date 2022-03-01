import { withStyles } from '@mui/styles';
import { List } from '@mui/material';
import { TreeProps, TreeStyles, TreeDefaultProps, TreeValueProps } from '.';
import TreeItem from '../../.internal/Tree/TreeItem';

function Tree(props: TreeProps) {
  const { values, classes, ItemProps } = props;

  const renderTreeItem = (value: TreeValueProps) => {
    const { id, children } = value;
    const customTreeProps = {
      ...props,
      floor: props.floor + 1,
      values: children ? children : [],
    };

    return (
      <TreeItem
        key={id}
        {...ItemProps}
        ValueProps={value}
        TreeProps={customTreeProps}
      />
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
