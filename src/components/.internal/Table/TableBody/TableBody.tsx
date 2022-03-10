import { useMemo } from 'react';
import TableBodyProps, { FieldProps } from './TableBody.d';
import {
  TableBody as MuiTableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { FieldDefaultProps } from '../../../core/Table/Table.default';

/**
 * Compare values 2 indexes
 * @param a value at prev index
 * @param b value at curr index
 * @param orderBy field to compare
 * @returns (-1 | 0 | 1)
 */
function descendingComparator(
  a: any,
  b: any,
  orderBy: (string | number | undefined)
) {
  const key = orderBy ? orderBy : '';

  if (b[key] < a[key]) {
    return -1;
  }
  if (b[key] > a[key]) {
    return 1;
  }
  return 0;
}

function getComparator(
  order: ('desc' | 'asc' | undefined),
  orderBy: (string | number | undefined)
) {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: Array<any>, comparator: any) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function TableBody(props: TableBodyProps) {
  const { TableProps, orderBy, orderDirection } = props;
  const { values, fields, selected, conditions, BodyProps, RowProps } = TableProps;

  /** Extract primary field */
  const primaryField = fields.filter((field: FieldProps) => field.isPrimary)[0];

  const handleRowClick = (event: React.MouseEvent<HTMLElement>, value: any) => {
    RowProps && RowProps.onClick && RowProps.onClick(event, value);
  };

  const handleRowDoubleClick = (event: React.MouseEvent<HTMLElement>, value: any) => {
    RowProps && RowProps.onDoubleClick && RowProps.onDoubleClick(event, value);
  };

  const handleRowContextMenu = (event: React.MouseEvent<HTMLElement>, value: any) => {
    RowProps && RowProps.onContextMenu && RowProps.onContextMenu(event, value);
  };

  const handleRowDrop = (event: React.MouseEvent<HTMLElement>, value: any) => {
    RowProps && RowProps.onDrop && RowProps.onDrop(event, value);
  };

  const handleRowDrag = (event: React.MouseEvent<HTMLElement>, value: any) => {
    RowProps && RowProps.onDrag && RowProps.onDrag(event, value);
  };

  const handleRowDragStart = (event: React.MouseEvent<HTMLElement>, value: any) => {
    RowProps && RowProps.onDragStart && RowProps.onDragStart(event, value);
  };

  const isSelected = (value: {
    [key: string]: any,
  }): boolean => {

    return (selected ? selected : []).includes(value[primaryField.id]);
  };

  const consumeRowProps = (value: {
    [key: string]: any
  }) => {
    const specificRowProps = {};

    conditions && conditions.map((condition: (value: any) => React.BaseHTMLAttributes<HTMLTableRowElement>) => {
      Object.assign(specificRowProps, condition(value));

      return condition;
    });

    return specificRowProps;
  }

  const renderCell = (field: FieldProps, value: {
    [key: string]: any;
  }) => {
    const { id, hidden, render, extra, align, padding } = {
      ...FieldDefaultProps,
      ...field,
    };

    return !!!hidden && (
      <TableCell
        key={`${value[primaryField.id]}-${id}`}
        align={align}
        padding={padding}
      >
        {render(extra, value)}
      </TableCell>
    );
  };

  const renderRow = (value: {
    [key: string]: any,
  }) => {
    const isRowSelected = isSelected(value);
    const rowProps = consumeRowProps(value);

    return (
      <TableRow
        hover
        role='checkbox'
        tabIndex={-1}
        key={value[primaryField.id]}
        selected={isRowSelected}
        aria-checked={isRowSelected}
        {...RowProps}
        {...rowProps}
        onClick={(event: React.MouseEvent<HTMLElement>) => handleRowClick(event, value)}
        onDoubleClick={(event: React.MouseEvent<HTMLElement>) => handleRowDoubleClick(event, value)}
        onDrag={(event: React.MouseEvent<HTMLElement>) => handleRowDrag(event, value)}
        onDrop={(event: React.MouseEvent<HTMLElement>) => handleRowDrop(event, value)}
        onDragStart={(event: React.MouseEvent<HTMLElement>) => handleRowDragStart(event, value)}
        onContextMenu={(event: React.MouseEvent<HTMLElement>) => handleRowContextMenu(event, value)}
      >
        {
          fields.map((field: FieldProps) => renderCell(field, value))
        }
      </TableRow>
    );
  };

  const sortedValues = useMemo(() => stableSort(values, getComparator(orderDirection, orderBy)), [
    orderBy,
    orderDirection,
    values,
  ]);

  return (
    <MuiTableBody {...BodyProps}>
      {
        sortedValues.map(renderRow)
      }
    </MuiTableBody>
  );
}

export default TableBody;
