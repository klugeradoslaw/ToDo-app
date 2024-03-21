import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {ReactComponent as Circle} from '../../assets/icons/circle.svg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton, Stack, Typography} from '@mui/material';
import {InvoiceStatus, InvoiceStatusType} from "../../const/InvoiceStatus";

type Props = {
    columns: {
        accessorKey: string;
        header: string;
    }
    data: {
        
    }
}

const TableComponent = ({columns, data}: Props) => {
    const setCircleColor = (invoiceStatus: string) => {
        return InvoiceStatus.find(
            (status: InvoiceStatusType) => status.title === invoiceStatus)?.fillColor;
    };

    return (
        <TableContainer>
            <Table sx={{minWidth: 650, fontFamily: 'Roboto',}} aria-label="invoice-table">
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell key={column.accessorKey}>
                                {column.header}
                            </TableCell>
                        ))}
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            {columns.map(column => (
                                <TableCell key={column.accessorKey}>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="flex-start"
                                        alignItems="center"
                                    >
                                        {column.accessorKey === 'invoiceStatus' &&
                                            <Circle fill={setCircleColor(row.invoiceStatus)}/>}
                                        <Typography>
                                            {row[column.accessorKey]}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                            ))}

                            <TableCell sx={{padding: 0}}>
                                <IconButton onClick={null}><MoreVertIcon/></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent;