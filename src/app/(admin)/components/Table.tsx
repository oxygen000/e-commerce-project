"use client";

import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Tbody, Td, Th, Thead, Tr } from "./TableComponents";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface TableProps {
  data: { [key: string]: string | number | boolean }[];
  columns: { key: string; label: string }[];
  children?: React.ReactNode;

}

const Table: React.FC<TableProps> = ({ data, columns,   }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // تصفية البيانات بناءً على البحث
  const filteredData = data.filter((row) =>
    columns.some((col) =>
      row[col.key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // ترتيب البيانات
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    } else {
      return sortOrder === "asc"
        ? valueA.toString().localeCompare(valueB.toString())
        : valueB.toString().localeCompare(valueA.toString());
    }
  });

  // تبديل الفرز عند النقر على العنوان
  const handleSort = (col: string) => {
    if (sortColumn === col) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(col);
      setSortOrder("asc");
    }
  };

  // وظيفة تصدير البيانات إلى ملف Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(sortedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });

    saveAs(dataBlob, "table_data.xlsx");
  };

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg">
      {/* مربع البحث */}
      <div className="flex justify-between mb-3">
        <input
          type="text"
          placeholder="🔍 بحث..."
          className="p-2 border border-gray-300 rounded-md w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={exportToExcel}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          📥 تصدير إلى Excel
        </button>
      </div>

      <table className="min-w-full border border-gray-300 rounded-lg">
        <Thead>
          <Tr className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            {columns.map((col) => (
              <Th key={col.key} onClick={() => handleSort(col.key)} className="cursor-pointer">
                {col.label}{" "}
                {sortColumn === col.key ? (
                  sortOrder === "asc" ? (
                    <FaSortUp className="inline" />
                  ) : (
                    <FaSortDown className="inline" />
                  )
                ) : (
                  <FaSort className="inline opacity-50" />
                )}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.length > 0 ? (
            sortedData.map((row, index) => (
              <Tr
                key={index}
                className={`border-t ${
                  index % 2 === 0 ? "bg-gray-100 dark:bg-gray-900" : "bg-white dark:bg-gray-800"
                }`}
              >
                {columns.map((col) => (
                  <Td key={col.key}>{row[col.key]}</Td>
                ))}
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={columns.length} className="text-center p-4 text-gray-500">
                🚫 لا توجد بيانات متاحة
              </Td>
            </Tr>
          )}
        </Tbody>
      </table>
    </div>
  );
};

export default Table;
