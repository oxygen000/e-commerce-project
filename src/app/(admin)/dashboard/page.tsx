"use client";

import React from "react";
import { FaShoppingCart, FaUsers, FaChartLine, FaBell,  } from "react-icons/fa";
import Card from "../components/card";
import dynamic from "next/dynamic";
import RecentOrders from "../components/RecentOrders";

const LineChart = dynamic(() => import("../components/Charts/LineChart"), { ssr: false });
const BarChart = dynamic(() => import("../components/Charts/BarChart"), { ssr: false });

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="p-6 md:ml-64 container mx-auto mt-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Orders", value: "1,234", description: "+5% this month", icon: <FaShoppingCart className="text-blue-500 text-3xl" /> },
            { title: "New Users", value: "567", description: "+12% growth", icon: <FaUsers className="text-green-500 text-3xl" /> },
            { title: "Total Sales", value: "$12,345", description: "+8% revenue", icon: <FaChartLine className="text-yellow-500 text-3xl" /> },
            { title: "New Notifications", value: "23", description: "Urgent alerts", icon: <FaBell className="text-red-500 text-3xl" /> }
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

        {/* Charts Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Sales Performance</h3>
            <LineChart />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Product Rankings</h3>
            <BarChart />
          </div>
        </div>

        {/* Recent Orders Table */}
        <RecentOrders/>
      </div>
    </div>
  );
};

export default Dashboard;
