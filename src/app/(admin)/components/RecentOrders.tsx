import React from "react";
import { motion } from "framer-motion";
import { Column, useTable } from "react-table";

const RecentOrders = () => {
  const data = React.useMemo(
    () => [
      { id: "#12345", customer: "John Doe", amount: "$250", status: "Shipped" },
      { id: "#12346", customer: "Jane Smith", amount: "$120", status: "Processing" },
      { id: "#12347", customer: "Alice Brown", amount: "$600", status: "Delivered" }
    ],
    []
  );

  const columns: Array<Column<{ id: string; customer: string; amount: string; status: string }>> = React.useMemo(
    () => [
      { Header: "Order ID", accessor: "id" },
      { Header: "Customer", accessor: "customer" },
      { Header: "Amount", accessor: "amount" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }: { value: string }) => (
          <span
            className={`px-2 py-1 text-sm font-semibold text-white rounded ${
              value === "Shipped" ? "bg-blue-500" : value === "Processing" ? "bg-yellow-500" : "bg-green-500"
            }`}
          >
            {value}
          </span>
        )
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="mt-6 bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
      <table {...getTableProps()} className="w-full text-left border-collapse">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index} className="border-b">
              {headerGroup.headers.map((column, colIndex) => (
                <th {...column.getHeaderProps()} key={colIndex} className="py-2 px-4">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <motion.tr 
                {...row.getRowProps()} 
                key={rowIndex} 
                className="border-b hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                whileHover={{ scale: 1.02 }}
              >
                {row.cells.map((cell, cellIndex) => (
                  <td {...cell.getCellProps()} key={cellIndex} className="py-2 px-4">
                    {cell.render("Cell")}
                  </td>
                ))}
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
};

export default RecentOrders;
