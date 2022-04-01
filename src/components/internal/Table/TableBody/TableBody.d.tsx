import { TableProps, FieldProps } from 'components/core/Table';

interface TableBodyProps {
  TableProps: TableProps;
  orderBy?: string | number;
  orderDirection?: ('desc' | 'asc');
}

export type {
  FieldProps
}
export default TableBodyProps;
