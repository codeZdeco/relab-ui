import { useState } from "react";
import { withStyles } from "@mui/styles";
import styles from "./Table.styles";
import TableProps from "./Table.d";
import { Table as MuiTable, TableContainer } from "@mui/material";
import { TableHeader, TableBody, TableFooter } from "components/internal/Table";
import TableDefaultProps from "./Table.default";

function Table(props: TableProps) {
  const { sticky, dense, defaultSort, fields, defaultSortDirection } = props;

  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">(
    defaultSortDirection ? defaultSortDirection : "asc",
  );
  const [orderBy, setOrderBy] = useState<string | number>(
    defaultSort ? defaultSort : fields[0].id,
  );

  const handleSort = (
    _event: React.MouseEvent<HTMLElement>,
    fieldId: string | number,
  ) => {
    const isAsc = orderBy === fieldId && orderDirection === "asc";
    setOrderBy(fieldId);
    setOrderDirection(isAsc ? "desc" : "asc");
  };

  return (
    <TableContainer {...props}>
      <MuiTable size={dense ? "small" : "medium"} stickyHeader={sticky}>
        <TableHeader
          TableProps={props}
          onSort={handleSort}
          orderDirection={orderDirection}
          orderBy={orderBy}
        />
        <TableBody
          TableProps={props}
          orderBy={orderBy}
          orderDirection={orderDirection}
        />
      </MuiTable>
      <TableFooter TableProps={props} />
    </TableContainer>
  );
}

Table.defaultProps = TableDefaultProps;

export default withStyles(styles)(Table);
