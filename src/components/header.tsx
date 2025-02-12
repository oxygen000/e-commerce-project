"use client";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaUserAlt, FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

export default function Header({ cartCount }: { cartCount: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    // Close the menu if the user clicks outside the menu
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

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={`p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Store Logo */}
        <div className={`text-3xl font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'} transition-all duration-300`}>
          متجر الملابس الإلكتروني
        </div>
        
        {/* Navbar Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className={`text-lg hover:text-yellow-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} onClick={closeMenu}>الصفحة الرئيسية</a>
          <a href="#shop" className={`text-lg hover:text-yellow-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} onClick={closeMenu}>التسوق</a>
          <a href="#offers" className={`text-lg hover:text-yellow-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} onClick={closeMenu}>العروض</a>
          <a href="#about" className={`text-lg hover:text-yellow-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} onClick={closeMenu}>عن المتجر</a>
          <a href="#features" className={`text-lg hover:text-yellow-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} onClick={closeMenu}>المنتجات المميزة</a>
          <a href="#contact" className={`text-lg hover:text-yellow-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} onClick={closeMenu}>اتصل بنا</a>
          <a href="#login" className={`text-lg flex items-center hover:text-yellow-400 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} onClick={closeMenu}>
            <FaUserAlt className="mr-2" /> تسجيل الدخول
          </a>
          
          {/* Cart Icon */}
          <a href="#cart" className="relative text-gray-700 hover:text-yellow-500 flex items-center">
            <FaShoppingCart className="h-8 w-8" />
            {cartCount > 0 && <span className="absolute top-0 right-0 bg-yellow-500 text-white text-xs w-4 h-4 flex items-center justify-center">{cartCount}</span>}
          </a>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="ml-4 text-gray-700 hover:text-yellow-500">
            {darkMode ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
          </button>
        </nav>
        
        {/* Menu Button for Mobile */}
        <button className="md:hidden text-gray-700 hover:text-yellow-500" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 bg-gray-900 text-white w-64 h-full transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6 space-y-6">
          {/* Close Button */}
          <button className="absolute top-4 left-4 text-white" onClick={closeMenu}>
            <FaTimes className="h-7 w-7" />
          </button>

          <a href="#home" className="block text-xl py-3 hover:text-yellow-400" onClick={closeMenu}>الصفحة الرئيسية</a>
          <a href="#shop" className="block text-xl py-3 hover:text-yellow-400" onClick={closeMenu}>التسوق</a>
          <a href="#offers" className="block text-xl py-3 hover:text-yellow-400" onClick={closeMenu}>العروض</a>
          <a href="#about" className="block text-xl py-3 hover:text-yellow-400" onClick={closeMenu}>عن المتجر</a>
          <a href="#features" className="block text-xl py-3 hover:text-yellow-400" onClick={closeMenu}>المنتجات المميزة</a>
          <a href="#contact" className="block text-xl py-3 hover:text-yellow-400" onClick={closeMenu}>اتصل بنا</a>
          <a href="#login" className="block text-xl py-3 flex items-center hover:text-yellow-400" onClick={closeMenu}>
            <FaUserAlt className="mr-2" /> تسجيل الدخول
          </a>

          {/* Dark Mode Toggle in Mobile Menu */}
          <button onClick={toggleDarkMode} className="block text-xl py-3 flex items-center hover:text-yellow-400" onClick={closeMenu}>
            {darkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />} تغيير الوضع
          </button>

          {/* Cart Icon in Mobile Menu */}
          <a href="#cart" className="block text-xl py-3 flex items-center hover:text-yellow-400" onClick={closeMenu}>
            <FaShoppingCart className="mr-2" /> العربة
            {cartCount > 0 && <span className="bg-yellow-500 text-white text-xs w-4 h-4 flex items-center justify-center">{cartCount}</span>}
          </a>
        </div>
      </div>
    </header>
  );
}
