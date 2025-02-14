// src/app/cart/page.tsx
"use client"; // لتحديد المكون كمكون عميل

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
  // افترض أنك تقوم بإدارة العربة باستخدام الـ localStorage أو Redux، هذه القيم هي افتراضية
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "منتج 1",
      price: 100,
      quantity: 2,
      imageUrl: "/test.jpg", // صورة افتراضية للمنتج
    },
    {
      id: 2,
      name: "منتج 2",
      price: 50,
      quantity: 1,
      imageUrl: "/test2.jpg", // صورة افتراضية للمنتج
    },
  ]);

  // حساب الإجمالي
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // معالجة إزالة عنصر من العربة
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // معالجة تعديل الكمية
  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // إفراغ العربة
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="p-6 sm:p-8 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
        عربة التسوق
      </h2>

      {/* عرض العناصر في العربة */}
      {cartItems.length > 0 ? (
        <div className="space-y-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center justify-between space-x-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center space-x-6">
                <Image
                  src={item.imageUrl || "/default-image.jpg"} // صورة افتراضية في حالة عدم وجود صورة
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    السعر: {item.price} جنيه
                  </p>
                  <div className="flex items-center space-x-2 mt-3">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 transition-all"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-16 text-center text-gray-700 border border-gray-300 rounded-md"
                      min="1"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                إزالة
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          عربة التسوق فارغة
        </p>
      )}

      {/* تفاصيل الدفع */}
      {cartItems.length > 0 && (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-8 flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            <span>الإجمالي: </span>
            <span className="text-xl font-bold">{totalPrice} جنيه</span>
          </div>

          <div className="flex space-x-6">
            <button
              onClick={handleClearCart}
              className="text-red-500 hover:text-red-700 font-semibold transition-all"
            >
              إفراغ العربة
            </button>

            <Link href="/checkout">
              <button className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary-dark transition-all">
                متابعة الدفع
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
