"use client";

import React from "react";
import { FaUsers, FaClock, FaChartLine, FaShoppingCart } from "react-icons/fa";
import dynamic from "next/dynamic";
import Card from "../components/card";
import Table from "../components/Table";
import { Tbody, Td, Th, Thead, Tr } from "../components/TableComponents";

// استيراد المخططات البيانية
const LineChart = dynamic(() => import("../components/Charts/LineChart"), { ssr: false });
const BarChart = dynamic(() => import("../components/Charts/BarChart"), { ssr: false });

const Users: React.FC = () => {
  // بيانات المستخدمين التجريبية
  const usersData = [
    { id: 1, name: "Ahmed", timeSpent: "2h 15m", purchases: 3, lastLogin: "2025-02-14" },
    { id: 2, name: "Sara", timeSpent: "1h 40m", purchases: 5, lastLogin: "2025-02-13" },
    { id: 3, name: "Omar", timeSpent: "3h 10m", purchases: 2, lastLogin: "2025-02-12" },
    { id: 4, name: "Lina", timeSpent: "45m", purchases: 1, lastLogin: "2025-02-11" },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="p-6 md:ml-64 container mx-auto mt-8">
        
        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Users", value: "1,234", description: "+5% this month", icon: <FaUsers className="text-blue-500 text-3xl" /> },
            { title: "Avg. Session Time", value: "1h 45m", description: "User engagement", icon: <FaClock className="text-green-500 text-3xl" /> },
            { title: "Top Purchases", value: "5,678", description: "+12% this month", icon: <FaShoppingCart className="text-yellow-500 text-3xl" /> },
            { title: "Active Users Today", value: "256", description: "Real-time data", icon: <FaChartLine className="text-red-500 text-3xl" /> }
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col gap-4 rounded-lg"
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            >
              <p className="text-sm text-gray-500">{stat.description}</p>
            </Card>
          ))}
        </div>

        {/* المخططات البيانية */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">User Activity Trends</h3>
            <LineChart />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Most Visited Pages</h3>
            <BarChart />
          </div>
        </div>

        {/* جدول بيانات المستخدمين */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-4">User Data Overview</h3>
          <Table
  data={usersData}
  columns={[
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "timeSpent", label: "Time Spent" },
    { key: "purchases", label: "Purchases" },
    { key: "lastLogin", label: "Last Login" },
  ]}
>
  <Thead>
    <Tr>
      <Th>ID</Th>
      <Th>Name</Th>
      <Th>Time Spent</Th>
      <Th>Purchases</Th>
      <Th>Last Login</Th>
    </Tr>
  </Thead>
  <Tbody>
    {usersData.map((user) => (
      <Tr key={user.id}>
        <Td>{user.id}</Td>
        <Td>{user.name}</Td>
        <Td>{user.timeSpent}</Td>
        <Td>{user.purchases}</Td>
        <Td>{user.lastLogin}</Td>
      </Tr>
    ))}
  </Tbody>
</Table>
        </div>
        
      </div>
    </div>
  );
};

export default Users;
