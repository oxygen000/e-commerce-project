"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const BarChartComponent = () => {
  const categories = useSelector((state: RootState) => state.clothing.categories);
  const [selectedCategory, setSelectedCategory] = useState<"men" | "women" | "kids">("men");

  // تحسين الأداء باستخدام useMemo لتجنب إعادة الحساب
  const chartData = useMemo(
    () =>
      categories[selectedCategory]?.map((item) => ({
        name: item.name,
        value: item.value,
      })) || [],
    [categories, selectedCategory]
  );

  // تحسين الأداء باستخدام useCallback لتحديث الفئة المحددة
  const handleCategoryChange = useCallback((category: "men" | "women" | "kids") => {
    setSelectedCategory(category);
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full min-h-[500px]">
      {/* قائمة اختيار الفئات */}
      <div className="mb-4 flex space-x-4">
        {["men", "women", "kids"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded transition-all duration-300 ${
              selectedCategory === category
                ? category === "men"
                  ? "bg-blue-500 text-white"
                  : category === "women"
                  ? "bg-pink-500 text-white"
                  : "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryChange(category as "men" | "women" | "kids")}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}&apos;s Clothing
          </button>
        ))}
      </div>

      {/* رسم المخطط البياني باستخدام Recharts */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
          <XAxis dataKey="name" stroke="#4B5563" tick={{ fill: "#4B5563", fontSize: 12 }} />
          <YAxis stroke="#4B5563" tick={{ fill: "#4B5563", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              color: "#F9FAFB",
              borderRadius: "8px",
              padding: "10px",
            }}
            cursor={{ fill: "rgba(75, 85, 99, 0.2)" }}
          />
          <Legend
            wrapperStyle={{ color: "#4B5563", fontSize: "14px" }}
            formatter={(value) => <span className="text-gray-700 dark:text-gray-300">{value}</span>}
          />
          <Bar dataKey="value" fill="#2563EB" radius={[8, 8, 0, 0]} barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
