import { withStyles } from '@mui/styles';
import { List } from '@mui/material';
import { TreeProps, TreeStyles, TreeDefaultProps, TreeValueProps } from '.';
import TreeItem from 'components/internal/Tree/TreeItem'
import { MapperProps } from './Tree.d';
import React from 'react';

function Tree(props: TreeProps & typeof TreeDefaultProps) {
  const {
    values,
    classes,
    floor,
    ItemProps,
    mapper,
    filter
  } = props;

  const isArry = Array.isArray(values);

  const renderTreeItem = (value: TreeValueProps): React.ReactNode => {
    const { id, children } = value;
    const customTreeProps = {
      ...props,
      floor: floor + 1,
      values: children ? Array.isArray(children) ? children : Object.values(children) : [],
    };

    return (
      <TreeItem
        key={id}
        ValueProps={value}
        TreeProps={customTreeProps}
        {...ItemProps}
      />
    );
  };

  const mappedValues: Array<TreeValueProps> = (isArry ? values : Object.values(values))?.filter(filter ? filter : (value: any) => value)?.map((value: {
    [key: string]: any;
  }) => {
    const newValue = {
      id: '',
      label: '',
    };

    const newMapper: MapperProps = {
      ...TreeDefaultProps.mapper,
      ...mapper,
    };

    mapper && Object.keys(newMapper).map((mapperKey: string) => {
      Object.assign(newValue, {
        [mapperKey]: value[newMapper[mapperKey]],
      });
      return mapperKey;
    });

    return newValue;
  });

  return (
    <List
      dense
      {...props}
      className={classes?.root}
    >
      {mappedValues?.map(renderTreeItem)}
    </List>
  );
}

Tree.defaultProps = TreeDefaultProps;

export default withStyles(TreeStyles)((Tree));
