"use client";
import React from "react";

interface CardProps {
    className: string;
    title: string;
    value: string;
    icon: React.ReactNode;
    children: React.ReactNode;
  }

const Card: React.FC<CardProps> = ({ title, value, icon, className }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center ${className}`}
    >
      <div className="text-3xl text-primary mr-4">{icon}</div>
      <div className="flex-grow">
        <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Card;
