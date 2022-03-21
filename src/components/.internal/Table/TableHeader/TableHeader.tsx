import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';
import TableHeaderProps, { FieldProps } from './TableHeader.d';
import { FieldDefaultProps } from '_core/Table/Table.default';

function TableHeader(props: TableHeaderProps) {
  const {
    TableProps,
    orderBy,
    orderDirection,
    onSort: handleSort
  } = props;
  const { fields, HeaderProps } = TableProps;

  const renderTableHeadCell = (field: FieldProps): React.ReactNode => {
    const { id, align, padding, label, sortable, hidden, width } = {
      ...FieldDefaultProps,
      ...field,
    };

    return !!!hidden && (
      <TableCell
        key={id}
        align={align}
        padding={padding}
        width={width}
      >
        {
          sortable ? (
            <TableSortLabel
              active={id === orderBy}
              direction={orderBy === id ? orderDirection : 'asc'}
              onClick={(event: React.MouseEvent<HTMLElement>) => handleSort && handleSort(event, id)}
            >
              {label}
            </TableSortLabel>
          ) : label
        }
      </TableCell>
    );
  };

  return (
    <TableHead {...HeaderProps}>
      <TableRow>
        {
          fields.map(renderTableHeadCell)
        }
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
