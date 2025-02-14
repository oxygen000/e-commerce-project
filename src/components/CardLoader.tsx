// components/CardLoader.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const CardLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 group transition-all duration-300 w-[300px] h-[400px] flex flex-col justify-between border-2 border-gray-300 dark:border-gray-700"
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <div className="bg-gray-300 dark:bg-gray-700 rounded-t-lg h-3/5 w-full animate-pulse border-b-2 border-gray-200 dark:border-gray-600"></div>
      </motion.div>
      <div className="mt-4 space-y-3">
        <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
        <div className="mt-2 w-2/3 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
        <div className="mt-2 w-1/3 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
      </div>
    </motion.div>
  );
};

// Wrapper component to repeat the loader 3 times
const CardLoaderWrapper: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-10 px-4 justify-items-center">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <CardLoader />
        </motion.div>
      ))}
    </div>
  );
};

export default CardLoaderWrapper;
