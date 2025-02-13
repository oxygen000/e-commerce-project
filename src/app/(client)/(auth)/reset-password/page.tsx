"use client";

import { useState } from "react";
import { FaLock, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // تحقق من تطابق كلمات المرور
    if (newPassword !== confirmPassword) {
      setLoading(false);
      setErrorMessage("كلمة المرور وتأكيد كلمة المرور لا يتطابقان.");
      return;
    }

    // إرسال طلب إعادة تعيين كلمة المرور (محاكاة)
    try {
      // محاكاة لعملية إرسال الطلب إلى السيرفر
      setTimeout(() => {
        setLoading(false);
        setSuccessMessage("تم تغيير كلمة المرور بنجاح.");
      }, 2000);
    } catch {
      setLoading(false);
      setErrorMessage("حدث خطأ أثناء إعادة تعيين كلمة المرور. حاول مرة أخرى.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/reset-password-bg.jpg')" }}>
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8 w-full max-w-lg backdrop-blur-md bg-opacity-90 dark:bg-opacity-95">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
          إعادة تعيين كلمة المرور
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-500 dark:text-gray-400" />
            <input
              type="password"
              placeholder="كلمة المرور الجديدة"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full pl-12 p-4 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-500 dark:text-gray-400" />
            <input
              type="password"
              placeholder="تأكيد كلمة المرور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-12 p-4 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              required
            />
          </div>

          {successMessage && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mt-4 text-center">
              {successMessage} <FaCheckCircle className="inline-block ml-2" />
            </div>
          )}

          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mt-4 text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-primary text-white py-4 rounded-lg hover:bg-primary-dark transition-all duration-300"
            disabled={loading}
          >
            {loading ? "جاري تحديث كلمة المرور..." : "تغيير كلمة المرور"}
          </button>
        </form>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          العودة إلى
          <Link href="/login" className="text-primary hover:underline ml-1 transition-all duration-300">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
