// components/Card.tsx
import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
}

const Card: React.FC<CardProps> = ({ image, title, description, width = 300, height = 300 }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 group transition-all duration-300 ease-in-out hover:scale-105">
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        className="rounded-t-lg group-hover:opacity-80 transition-all duration-300"
      />
      <h3 className="text-lg font-semibold mt-4 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
