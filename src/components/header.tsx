"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import ThemeProvider from "./ThemeProvider";
import Cart from "./cart";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="p-4 bg-primary text-white shadow-lg transition-all duration-300 dark:bg-yellow-600 dark:text-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold transition-all duration-300">
          متجر الملابس الإلكتروني
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-lg hover:text-gray-800 transition-colors duration-300 dark:hover:text-gray-300" onClick={closeMenu}>الصفحة الرئيسية</Link>
          <Link href="/shop" className="text-lg hover:text-gray-800 transition-colors duration-300 dark:hover:text-gray-300" onClick={closeMenu}>التسوق</Link>
          <Link href="/offers" className="text-lg hover:text-gray-800 transition-colors duration-300 dark:hover:text-gray-300" onClick={closeMenu}>العروض</Link>
          <Link href="/about" className="text-lg hover:text-gray-800 transition-colors duration-300 dark:hover:text-gray-300" onClick={closeMenu}>عن المتجر</Link>
          <Link href="/features" className="text-lg hover:text-gray-800 transition-colors duration-300 dark:hover:text-gray-300" onClick={closeMenu}>المنتجات المميزة</Link>
          <Link href="/contact" className="text-lg hover:text-gray-800 transition-colors duration-300 dark:hover:text-gray-300" onClick={closeMenu}>اتصل بنا</Link>
          <Link href="/login" className="text-lg flex items-center hover:text-gray-800 transition-colors duration-300 dark:hover:text-gray-300" onClick={closeMenu}>
            <FaUserAlt className="mr-2" /> تسجيل الدخول
          </Link>
          <Cart />
        </nav>

        <button className="md:hidden text-white hover:text-gray-800 dark:hover:text-gray-300" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="h-7 w-7" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 bg-yellow-600 text-white w-64 h-full transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 dark:bg-yellow-700 dark:text-black`}
      >
        <div className="p-6 space-y-6">
          <button className="absolute top-4 left-4 text-white dark:text-black" onClick={closeMenu}>
            <FaTimes className="h-7 w-7" />
          </button>

          <Link href="/" className="block text-xl py-3 hover:text-gray-800 dark:hover:text-gray-300" onClick={closeMenu}>الصفحة الرئيسية</Link>
          <Link href="/shop" className="block text-xl py-3 hover:text-gray-800 dark:hover:text-gray-300" onClick={closeMenu}>التسوق</Link>
          <Link href="/offers" className="block text-xl py-3 hover:text-gray-800 dark:hover:text-gray-300" onClick={closeMenu}>العروض</Link>
          <Link href="/about" className="block text-xl py-3 hover:text-gray-800 dark:hover:text-gray-300" onClick={closeMenu}>عن المتجر</Link>
          <Link href="/features" className="block text-xl py-3 hover:text-gray-800 dark:hover:text-gray-300" onClick={closeMenu}>المنتجات المميزة</Link>
          <Link href="/contact" className="block text-xl py-3 hover:text-gray-800 dark:hover:text-gray-300" onClick={closeMenu}>اتصل بنا</Link>
          <Link href="/login" className="block text-xl py-3 flex items-center hover:text-gray-800 dark:hover:text-gray-300" onClick={closeMenu}>
            <FaUserAlt className="mr-2" /> تسجيل الدخول
          </Link>
        </div>
      </div>
      <ThemeProvider />
    </header>
  );
}
