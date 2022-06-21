import { TableProps } from "components/core/Table";
import {
  PaginationProps as MuiPaginationProps,
  StyledComponentProps,
} from "@mui/material";

export interface PaginationProps extends MuiPaginationProps {
  rowsPerPageOptions?: Array<number>;
  rowsPerPageValue?: number;
  rowsPerPageDefault?: number;
  rowsPerPageText?: string;

  totalRecords: number;
}

export default interface TableFooterProps extends StyledComponentProps {
  TableProps: TableProps;

  PaginationProps?: PaginationProps;
}
