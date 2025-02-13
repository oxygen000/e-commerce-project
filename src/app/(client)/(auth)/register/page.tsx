"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaEye, FaEyeSlash, FaCalendarAlt } from "react-icons/fa";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [language, setLanguage] = useState("ar");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const formErrors: { [key: string]: string } = {};

    if (!name) formErrors.name = "الاسم الكامل مطلوب";
    if (!email) formErrors.email = "البريد الإلكتروني مطلوب";
    if (!phone) formErrors.phone = "رقم الهاتف مطلوب";
    if (!password) formErrors.password = "كلمة المرور مطلوبة";
    if (password !== confirmPassword) formErrors.confirmPassword = "كلمتا المرور غير متطابقتين";
    if (!birthdate) formErrors.birthdate = "تاريخ الميلاد مطلوب";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    // تنفيذ عملية التسجيل هنا
    setTimeout(() => setLoading(false), 2000);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // التأكد من أن الرقم يبدأ بـ +20 أو 01
    if (value.length === 1 && value !== "+" && value !== "0") {
      return;
    }

    if (value.startsWith("0") && value.length === 1) {
      value = "+20"; // إضافة رمز مصر تلقائيًا
    } else if (value.startsWith("+20") && value.length === 4) {
      value = "+20"; // التأكد من أن الرقم يبدأ بـ +20
    }

    // تأكد من أن الرقم يحتوي على أرقام فقط
    if (!/[^0-9+]/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 bg-cover bg-center" style={{ backgroundImage: 'url(/auth-bg.jpg)' }}>
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-4xl backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          إنشاء حساب جديد
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="الاسم الكامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type="tel"
              placeholder="رقم الهاتف"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full pl-10 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type="date"
              placeholder="تاريخ الميلاد"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            {errors.birthdate && <p className="text-red-500 text-sm mt-1">{errors.birthdate}</p>}
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500 dark:text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type="password"
              placeholder="تأكيد كلمة المرور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <div className="relative col-span-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-all"
            disabled={loading}
          >
            {loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
          </button>
        </form>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          لديك حساب بالفعل؟
          <Link href="/login" className="text-primary hover:underline ml-1">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
