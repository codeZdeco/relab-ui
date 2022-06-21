import TableFooterProps from "./TableFooter.d";
import TableDefaultProps from "components/core/Table/Table.default";

const TableFooterDefaultProps: TableFooterProps = {
  TableProps: TableDefaultProps,
  PaginationProps: {
    rowsPerPageOptions: [5, 10, 20],
    rowsPerPageValue: 5,
    rowsPerPageDefault: 5,
    rowsPerPageText: "Rows per page",
    totalRecords: 0,
  },
};

export default TableFooterDefaultProps;
