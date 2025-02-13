"use client";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكنك إضافة المنطق لإرسال طلب إعادة تعيين كلمة المرور
    setMessage("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/forgot-password-bg.jpg')" }}>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl backdrop-blur-md bg-opacity-80 dark:bg-opacity-90">
        <h2 className="text-3xl font-semibold text-center text-yellow-600 mb-8">
          نسيت كلمة المرور
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 mt-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            إرسال الرابط
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
