// src/app/cart/layout.tsx

import React from "react";
import Header from "@/components/header";  // تأكد من استخدام الـ H الكبير
import Footer from "@/components/footer";

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      {/* استيراد الهيدر */}
      <Header />

      <main className="flex-grow max-w-6xl mx-auto p-6 sm:p-8">
        {/* تحريك المحتوى إلى المركز مع إضافة padding أكبر للتباعد */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          {children}
        </div>
      </main>

      {/* استيراد الفوتر */}
      <Footer />
    </div>
  );
};

export default CartLayout;
