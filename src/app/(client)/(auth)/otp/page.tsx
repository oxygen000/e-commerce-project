"use client"; // إضافة هذه السطر لتحديد المكون كـ Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";


const OTPPage = () => {
    const [otp, setOtp] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
  
      if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
        setError("الرمز غير صحيح أو غير مكتمل.");
        setLoading(false);
        return;
      }
  
      setTimeout(() => {
        if (otp === "123456") {
          router.push("/success");
        } else {
          setError("الرمز غير صحيح. حاول مرة أخرى.");
        }
        setLoading(false);
      }, 1500);
    };
  
    const resendOtp = () => {
      alert("إعادة إرسال الرمز");
      // تنفيذ إعادة إرسال الرمز هنا
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
            إدخال رمز التحقق
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="أدخل رمز التحقق"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={6}
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
  
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-all"
              disabled={loading}
            >
              {loading ? "جاري التحقق..." : "التحقق"}
            </button>
          </form>
  
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
            لم تتلق الرمز؟ 
            <button
              className="text-primary hover:underline"
              onClick={resendOtp} // استدعاء الدالة مباشرة هنا
            >
              إعادة إرسال الرمز
            </button>
          </p>
        </div>
      </div>
    );
  };
  
  export default OTPPage;