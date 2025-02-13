"use client";

import { useEffect } from "react";
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useRouter } from 'next/navigation';

interface ErrorPageProps {
  error: Error;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error); // يمكنك تتبع الأخطاء في وحدة التحكم
  }, [error]);

  return (
    <>
    <Header/>
     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-red-600 dark:text-red-400 mb-4">
          حدث خطأ غير متوقع
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          هناك شيء خاطئ في الخادم. حاول مرة أخرى في وقت لاحق.
        </p>
        <button
          onClick={() => router.push('/')}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-all"
        >
          العودة إلى الصفحة الرئيسية
        </button>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default ErrorPage;
