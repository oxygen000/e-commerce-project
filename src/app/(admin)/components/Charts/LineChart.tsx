"use client";

import React, { useMemo } from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const LineChartComponent = () => {
  const salesData = useSelector((state: RootState) => state.sales.data);

  // تحسين الأداء باستخدام useMemo لتجنب إعادة التصيير غير الضروري
  const processedData = useMemo(() => salesData || [], [salesData]);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full min-h-[400px]">
      

      <ResponsiveContainer width="100%" height={400}>
        <LineChart key={JSON.stringify(processedData)} data={processedData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
          <XAxis
            dataKey="name"
            stroke="#4B5563"
            tick={{ fill: "#4B5563", fontSize: 12 }}
            tickMargin={10}
          />
          <YAxis
            stroke="#4B5563"
            tick={{ fill: "#4B5563", fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              color: "#F9FAFB",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "14px",
            }}
            cursor={{ strokeDasharray: "3 3", stroke: "#2563EB", strokeWidth: 1 }}
          />
          <Legend
            wrapperStyle={{ color: "#4B5563", fontSize: "14px" }}
            formatter={(value) => <span className="text-gray-700 dark:text-gray-300">{value}</span>}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563EB"
            strokeWidth={4}
            dot={{ r: 6, fill: "#2563EB", stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 8, fill: "#1D4ED8", stroke: "#fff", strokeWidth: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
