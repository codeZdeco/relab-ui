import { TableProps, FieldProps } from '.';

export const FieldDefaultProps: FieldProps = {
  id: 'id',
  label: 'ID',
  render: () => '',
  align: 'left',
  hidden: false,
  isPrimary: false,
  padding: 'normal',
  sortable: true,
  extra: {},
};

const TableDefaultProps: TableProps = {
  values: [],
  fields: [],
  dense: true,
  sticky: true,
  defaultSort: 'id',
  selectable: true,
};

export default TableDefaultProps;
