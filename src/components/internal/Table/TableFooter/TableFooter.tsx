import TableFooterProps from "./TableFooter.d";
import {
  TableFooter as MuiTableFooter,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  TableRow,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./TableFooter.styles";

function TableFooter(props: TableFooterProps) {
  const { TableProps, PaginationProps, classes } = props;
  const { pagination: isPagination, values } = TableProps;

  const {
    rowsPerPageDefault,
    rowsPerPageOptions,
    rowsPerPageText,
    rowsPerPageValue,
    totalRecords,
  } = PaginationProps || {};

  return isPagination ? (
    <MuiTableFooter className={classes && classes.root}>
      <FormControl>
        <InputLabel htmlFor='rowsPerPage'>{rowsPerPageText}</InputLabel>
        <Select
          labelId='rowsPerPage'
          id='rowsPerPage'
          value={rowsPerPageValue}
          defaultValue={rowsPerPageDefault}
          size='small'
          // onChange={handleChange}
        >
          {rowsPerPageOptions?.map((value: number) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Pagination
        {...PaginationProps}
        count={
          totalRecords && rowsPerPageValue ? totalRecords / rowsPerPageValue : 1
        }
        defaultPage={0}
      />
    </MuiTableFooter>
  ) : (
    <></>
  );
}

export default withStyles(styles)(TableFooter);
