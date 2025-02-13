// components/CardItem.tsx
import React from "react";
import Image from "next/image";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center group transition-all duration-300 ease-in-out hover:scale-105">
      <Image
        src={image}
        alt={title}
        width={250}
        height={250}
        className="rounded-t-lg"
      />
      <h3 className="text-lg font-semibold mt-4 text-foreground-dark dark:text-foreground-light">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <span className="text-yellow-500 font-bold mt-2 block">ج.م {price}</span>
      <button
        className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all dark:bg-yellow-600 dark:hover:bg-yellow-700"
        onClick={onAddToCart}
      >
        إضافة إلى العربة
      </button>
    </div>
  );
};

export default CardItem;
