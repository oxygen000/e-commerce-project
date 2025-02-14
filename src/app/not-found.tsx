"use client"
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <>
    <Header/>
     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          It looks like the page you&apos;re looking for doesn&apos;t exist. You can go back to the homepage or search for something else.
        </p>
        <button
          onClick={() => router.push('/')}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-all"
        >
          Back to Home
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default NotFound;
