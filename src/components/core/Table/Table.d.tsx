import { Modify } from "../../.global/commons.d";
import { OverrideMouseEvent } from "../../.global/events.d";
import { TableProps as MuiTableProps } from "@mui/material";

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

interface TableProps extends MuiTableProps {
  fields: Array<FieldProps>;
  values: Array<{
    [key: string]: string | number | undefined;
  }>;
  dense?: boolean;
  defaultSortDirection?: "asc" | "desc";
  defaultSort?: string | number;
  selected?: Array<string | number>;
  selectable?: boolean;
  /** Sticky header */
  sticky?: boolean;
  RowProps?: Modify<React.BaseHTMLAttributes<HTMLElement>, OverrideMouseEvent>;
  BodyProps?: Modify<React.BaseHTMLAttributes<HTMLElement>, OverrideMouseEvent>;
  HeaderProps?: Modify<
    React.BaseHTMLAttributes<HTMLElement>,
    OverrideMouseEvent
  >;
  FooterProps?: Modify<
    React.BaseHTMLAttributes<HTMLElement>,
    OverrideMouseEvent
  >;
  conditions?: Array<
    (value: any) => React.BaseHTMLAttributes<HTMLTableRowElement>
  >;
}

export default TableProps;
