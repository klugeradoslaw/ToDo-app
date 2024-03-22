export interface ColumnType {
    accessorKey: string;
    header: string;
}

export const InvoiceTableColumns: ColumnType[] = [
        {
            accessorKey: 'invoiceNumber',
            header: 'Numer faktury',
        },
        {
            accessorKey: 'dateOfInvoice',
            header: 'Data wystawienia',
        },
        {
            accessorKey: 'invoiceIssuer',
            header: 'Wystawiający',
        },
        {
            accessorKey: 'methodOfIssue',
            header: 'Sposób wystawienia',
        },
        {
            accessorKey: 'lorem1',
            header: 'Lorem',
        },
        {
            accessorKey: 'lorem2',
            header: 'Lorem',
        },
        {
            accessorKey: 'invoiceStatus',
            header: 'Status faktury',
        },
    ];