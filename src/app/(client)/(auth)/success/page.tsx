"use client"; // تحديد المكون كمكون عميل

const SuccessPage = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-600 dark:text-green-400 mb-6">
            تم التحقق بنجاح
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            تم التحقق من رمز OTP بنجاح. يمكنك الآن متابعة عملية التسجيل أو الدخول.
          </p>
          <button
            onClick={() => window.location.href = "/login"} // توجيه المستخدم إلى صفحة تسجيل الدخول
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-all"
          >
            الذهاب إلى تسجيل الدخول
          </button>
        </div>
      </div>
    );
  };
  
export default SuccessPage;
