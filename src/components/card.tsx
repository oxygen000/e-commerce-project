'use client';

import React from 'react';
import { FaCartPlus } from 'react-icons/fa'; // استيراد أيقونة سلة الشراء

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  onAddToCart: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, onAddToCart }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 mx-auto my-6">
      <img className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-yellow-600 text-center">{title}</div>
        <p className="text-gray-600 text-sm mb-6 text-center">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center bg-gray-100">
        <span className="font-semibold text-lg text-yellow-600">ج.م {price}</span>
        <button
          onClick={onAddToCart}
          className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <FaCartPlus className="mr-2 text-lg" />
          <span className="text-sm">إضافة إلى العربة</span>
        </button>
      </div>
    </div>
  );
};

const ProductList: React.FC = () => {
  const handleAddToCart = () => {
    alert("تم إضافة المنتج إلى العربة");
  };

  return (
    <div className="flex flex-wrap justify-center">
      <Card
        title="منتج 1"
        description="وصف بسيط للمنتج الأول. يحتوي على مزايا متعددة."
        imageUrl="https://via.placeholder.com/150"
        price={200}
        onAddToCart={handleAddToCart}
      />
      <Card
        title="منتج 2"
        description="وصف بسيط للمنتج الثاني. مثالي لجميع الأوقات."
        imageUrl="https://via.placeholder.com/150"
        price={350}
        onAddToCart={handleAddToCart}
      />
      <Card
        title="منتج 3"
        description="وصف بسيط للمنتج الثالث. عالي الجودة ويتميز بتصميم فريد."
        imageUrl="https://via.placeholder.com/150"
        price={500}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductList;
