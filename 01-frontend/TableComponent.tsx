import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Stack, Typography } from "@mui/material";
import { InvoiceStatus, InvoiceStatusType } from "../../const/InvoiceStatus";
import {ReactNode} from "react";
import {Circle} from "@mui/icons-material";

interface Props<T> {
  columns: Array<{ accessorKey: keyof T; header: string }>;
  data: T[];
};

function TableComponent<T>({ data, columns }: Props<T>) {
  const setCircleColor = (invoiceStatus: string) => {
    return InvoiceStatus.find(
      (status: InvoiceStatusType) => status.title === invoiceStatus)?.fillColor;
  };

  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650, fontFamily: "Roboto" }}
        aria-label="invoice-table"
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.accessorKey.toString()}>
                {column.header}
              </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowId) => (
            <TableRow key={rowId}>
              {columns.map((column) => (
                <TableCell key={column.accessorKey.toString()}>
                  <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="flex-start"
                      alignItems="center"
                  >
                    {column.accessorKey === 'invoiceStatus' &&
                        <Circle fill={setCircleColor(row.invoiceStatus)}/>}
                  {row[column.accessorKey] as ReactNode}
                  </Stack>
                </TableCell>
              ))}

              <TableCell sx={{ padding: 0 }}>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableComponent;
