import { SalesDataInterface } from './types';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'


interface SalesDataProps {
  salesData: SalesDataInterface[];
}

function formatDollars(amount: number): string {
  return `$${Math.floor(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

const columnHelper = createColumnHelper<SalesDataInterface>();
const columns = [
  columnHelper.accessor("weekEnding", {
    cell: (info) => (
      <div style={styles.row}>{info.getValue()}</div>
    ),
    header: () => "Week Ending",
  }),
  columnHelper.accessor("retailSales", {
    cell: (info) => (
      <div style={styles.row}>{formatDollars(info.getValue())}</div>
    ),
    header: () => "Retail Sales",
  }),
  columnHelper.accessor("retailerMargin", {
    cell: (info) => (
      <div style={styles.row}>{formatDollars(info.getValue())}</div>
    ),
    header: () => "Retailer Margin",
  }),
  columnHelper.accessor("unitsSold", {
    cell: (info) => <div style={styles.row}>{info.getValue()}</div>,
    header: () => "Units Sold",
  }),
  columnHelper.accessor("wholesaleSales", {
    cell: (info) => (
      <div style={styles.row}>{formatDollars(info.getValue())}</div>
    ),
    header: () => "Wholesale Sales",
  }),
];

function SalesData({salesData}: SalesDataProps) {
  const data = [...salesData];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
      <table style={styles.table}>
        <thead style={styles.row}>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr style={styles.row} key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td style={styles.cell} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  )
}

const styles = {
  table: {
    margin: "2rem",
    padding: "1rem",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "6px",
  },
  row: {
    borderBottom: "1px solid #eee"
  },
  cell: {
    "text-align": "center",
    margin: "0 auto",
    color: "#aaa",
    padding: "0.5rem"
  }
}

export default SalesData;