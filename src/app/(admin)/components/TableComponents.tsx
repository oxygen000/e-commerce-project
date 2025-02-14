"use client";

import React from "react";

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}
interface TdProps {
    colSpan?: number;
    className?: string;
    children: React.ReactNode;
  }

export const Thead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead className="bg-gray-200 dark:bg-gray-700">{children}</thead>
);

export const Tbody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tbody className="divide-y divide-gray-300 dark:divide-gray-600">{children}</tbody>
);

export const Tr: React.FC<TableRowProps> = ({ children, className }) => (
  <tr className={`hover:bg-gray-300 dark:hover:bg-gray-700 ${className}`}>{children}</tr>
);

export const Th: React.FC<TableRowProps & { onClick?: () => void }> = ({
  children,
  className,
  onClick,
}) => (
  <th
    className={`p-3 text-left font-semibold text-gray-700 dark:text-gray-300 ${className}`}
    onClick={onClick}
  >
    {children}
  </th>
);

export const Td: React.FC<TdProps> = ({ colSpan, className, children }) => {
    return <td colSpan={colSpan} className={className}>{children}</td>;
  };
