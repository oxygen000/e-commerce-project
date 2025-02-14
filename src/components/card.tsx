// components/Card.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  image: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
}

const Card: React.FC<CardProps> = ({ image, title, description, width = 300, height = 300 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 group transition-all duration-300"
    >
      <motion.div whileHover={{ scale: 1.1, opacity: 0.9 }} transition={{ duration: 0.3 }}>
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          className="rounded-t-lg"
        />
      </motion.div>
      <h3 className="text-lg font-semibold mt-4 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default Card;
