"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // إخفاء الهيدر والفوتر للصفحات التي تبدأ بـ /login أو /signup
  const hideLayout = pathname.startsWith("/login") || pathname.startsWith("/register")|| pathname.startsWith("/success")|| pathname.startsWith("/reset-password")|| pathname.startsWith("/otp")|| pathname.startsWith("/forgot-password");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {!hideLayout && <Header />}
      
      <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">{children}</main>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default ClientLayout;
