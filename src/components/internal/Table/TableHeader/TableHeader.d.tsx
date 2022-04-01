import React from 'react';
import { TableProps, FieldProps } from 'components/core/Table';

interface TableHeaderProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  TableProps: TableProps;
  orderBy?: string | number;
  orderDirection?: ('desc' | 'asc');
  onSort?: (event: React.MouseEvent<HTMLElement>, fieldId: string | number) => void;
}

export type {
  FieldProps,
}
export default TableHeaderProps;
