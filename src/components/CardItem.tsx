// components/CardItem.tsx
"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa"; // استخدام أيقونات النجوم

// CardItemProps interface extended to include rating, sales, and stock availability
interface CardItemProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  sales: number;
  inStock: boolean;
  onAddToCart: () => void;
  cartIcon: React.ReactNode;
}

const CardItem: React.FC<CardItemProps> = ({ image, title, description, price, rating, sales, inStock, onAddToCart }) => {
  const [clientTitle, setClientTitle] = useState(title); // حفظ عنوان العميل لعدم تغييره بين الخادم والعميل
  const [clientImage, setClientImage] = useState(image); // حفظ الصورة لعدم تغييره بين الخادم والعميل

  // Generate star icons based on rating
  const stars = Array(5).fill(false).map((_, index) => index < rating);

  useEffect(() => {
    setClientTitle(title); // تحديث العنوان بعد التقديم على العميل
    setClientImage(image); // تحديث الصورة بعد التقديم على العميل
  }, [title, image]);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center group transition-all duration-300 ease-in-out hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Image */}
      <Image src={clientImage} alt={clientTitle} width={250} height={250} className="rounded-t-lg mb-4" />
      
      {/* Title */}
      <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-gray-100">{clientTitle}</h3>
      
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">{description}</p>

      {/* Display Rating */}
      <div className="flex mt-2">
        {stars.map((filled, index) => (
          filled ? 
            <FaStar key={index} className="w-5 h-5 text-yellow-400" /> : 
            <FaRegStar key={index} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>

      {/* Display Price */}
      <span className="text-yellow-500 font-bold mt-2 block text-lg">E.G.P {price.toFixed(2)}</span>

      {/* Display Sales */}
      <p className="text-gray-500 text-sm mt-2">Sold: {sales}</p>

      {/* Display Availability */}
      <p className={`text-sm mt-2 ${inStock ? 'text-green-500' : 'text-red-500'}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      {/* Add to Cart Button with Cart Icon */}
      <motion.button
        className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition-all dark:bg-yellow-600 dark:hover:bg-yellow-700 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onAddToCart}
      >
        <FaShoppingCart size={20} className="mr-2" />
      </motion.button>
    </motion.div>
  );
};

export default CardItem;
