import React from 'react';
import { SalesDataInterface } from './types';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'


interface SalesDataProps {
  salesData: SalesDataInterface[];
}

function convertCentsToDollars(cents: number) {
  const dollars = Math.floor(cents / 100); // Get the whole dollar amount
  const remaining = cents - dollars * 100;
  const remainingCents = remaining % 100; // Get the remaining cents
  return `$${dollars}.${remainingCents}`;
}

const columnHelper = createColumnHelper<SalesDataInterface>();
const columns = [
  columnHelper.accessor('weekEnding', {
    cell: info => info.getValue(),
    header: () => 'Week Ending',
  }),
  columnHelper.accessor('retailSales', {
    cell: info => convertCentsToDollars(info.getValue()),
    header: () => 'Retail Sales',
  }),
  columnHelper.accessor('retailerMargin', {
    cell: info => convertCentsToDollars(info.getValue()),
    header: () => 'Retailer Margin',
  }),
  columnHelper.accessor('unitsSold', {
    cell: info => info.getValue(),
    header: () => 'Units Sold',
  }),
  columnHelper.accessor('wholesaleSales', {
    cell: info => convertCentsToDollars(info.getValue()),
    header: () => 'Wholesale Sales',
  }),
  ]

  
function SalesData({salesData}: SalesDataProps) {
  const [data, _setData] = React.useState(() => [...salesData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div >
      <table>
        <thead>
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
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  )
}

export default SalesData;