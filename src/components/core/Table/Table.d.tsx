import { Modify } from "../../.global/commons.d";
import { OverrideMouseEvent } from "../../.global/events.d";
import {
  TableContainerProps,
  TableHeadProps,
  TableRowProps,
  TableBodyProps,
  TableFooterProps,
} from "@mui/material";

export interface FieldProps {
  id: string;
  label: string;
  render: (extra: any, value: any) => React.ReactNode | string | number;
  align?: "left" | "center" | "right" | "justify" | "inherit";
  padding?: "none" | "normal";
  sortable?: boolean;
  extra?: any;
  isPrimary?: boolean;
  hidden?: boolean;
  width?: number;
}

interface TableProps extends TableContainerProps {
  fields: Array<FieldProps>;
  values: Array<{
    [key: string]: string | number | undefined;
  }>;
  dense?: boolean;
  defaultSortDirection?: "asc" | "desc";
  defaultSort?: string | number;
  selected?: Array<string | number>;
  selectable?: boolean;
  pagination?: boolean;
  /** Sticky header */
  sticky?: boolean;
  RowProps?: Modify<TableRowProps, OverrideMouseEvent>;
  BodyProps?: Modify<TableBodyProps, OverrideMouseEvent>;
  HeaderProps?: Modify<TableHeadProps, OverrideMouseEvent>;
  FooterProps?: Modify<TableFooterProps, OverrideMouseEvent>;
  conditions?: Array<(value: any) => TableRowProps>;
}

export default TableProps;
