"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/loginAdmin";

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* إظهار الشريط الجانبي فقط إذا لم يكن في صفحة تسجيل الدخول */}
      {!isAuthPage && <Sidebar />}
      
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* إظهار الشريط العلوي فقط إذا لم يكن في صفحة تسجيل الدخول */}
        {!isAuthPage && <Navbar />}
        
        {/* المحتوى */}
        <main className="flex-grow p-4 sm:p-6 md:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
