export interface FieldProps {
  id: string;
  render: (extra: any) => string | number;
  align?: ('left' | 'center' | 'right');
  sortable?: boolean;
  extra?: any;
}

interface TableProps extends React.BaseHTMLAttributes<HTMLTableElement> {
  fields: Array<FieldProps>;
  values: Array<{
    [key: string]: string | number | undefined;
  }>;
  selectable?: boolean;
  sticky?: boolean;
  HeaderProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  FooterProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  conditions?: Array<(value: any) => React.BaseHTMLAttributes<HTMLTableRowElement>>;
}

export default TableProps;
