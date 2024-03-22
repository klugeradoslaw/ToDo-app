export interface Invoice {
    id: number;
    invoiceNumber: number;
    dateOfInvoice: string;
    invoiceIssuer: string;
    methodOfIssue: string;
    lorem1: string;
    lorem2: string;
    invoiceStatus: string;
}

export const InvoiceTableData: Invoice[] = [
    {
        id: 1,
        invoiceNumber: 2459754135879541,
        dateOfInvoice: "10.01.2024",
        invoiceIssuer: "Radosław Kluge",
        methodOfIssue: "Lorem ipsum...",
        lorem1: "Lorem ipsum...",
        lorem2: "Lorem ipsum...",
        invoiceStatus: "Do wysłania"
    },
    {
        id: 2,
        invoiceNumber: 2459754135879542,
        dateOfInvoice: "10.01.2024",
        invoiceIssuer: "Radosław Kluge",
        methodOfIssue: "Lorem ipsum...",
        lorem1: "Lorem ipsum...",
        lorem2: "Lorem ipsum...",
        invoiceStatus: "Przetwarzanie"
    },
    {
        id: 3,
        invoiceNumber: 2459754135879543,
        dateOfInvoice: "10.01.2024",
        invoiceIssuer: "Radosław Kluge",
        methodOfIssue: "Lorem ipsum...",
        lorem1: "Lorem ipsum...",
        lorem2: "Lorem ipsum...",
        invoiceStatus: "Oczekuje"
    },
    {
        id: 4,
        invoiceNumber: 2459754135879544,
        dateOfInvoice: "10.01.2024",
        invoiceIssuer: "Radosław Kluge",
        methodOfIssue: "Lorem ipsum...",
        lorem1: "Lorem ipsum...",
        lorem2: "Lorem ipsum...",
        invoiceStatus: "Odrzucone"
    },
    {
        id: 5,
        invoiceNumber: 2459754135879545,
        dateOfInvoice: "10.01.2024",
        invoiceIssuer: "Radosław Kluge",
        methodOfIssue: "Lorem ipsum...",
        lorem1: "Lorem ipsum...",
        lorem2: "Lorem ipsum...",
        invoiceStatus: "Zaakceptowane"
    },
    {
        id: 6,
        invoiceNumber: 2459754135879546,
        dateOfInvoice: "16.01.2024",
        invoiceIssuer: "Radosław Kluge",
        methodOfIssue: "Lorem ipsum...",
        lorem1: "Lorem ipsum...",
        lorem2: "Lorem ipsum...",
        invoiceStatus: "Przetwarzanie"
    },
    {
        id: 7,
        invoiceNumber: 2459754135879547,
        dateOfInvoice: "16.01.2024",
        invoiceIssuer: "Radosław Kluge",
        methodOfIssue: "Lorem ipsum...",
        lorem1: "Lorem ipsum...",
        lorem2: "Lorem ipsum...",
        invoiceStatus: "Przetwarzanie"
    },
]