"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
    <ThemeProvider>
        <header className="p-4 bg-primary text-white shadow-lg transition-all duration-300 dark:bg-yellow-600 dark:text-black">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Fashion Store
        </motion.div>

        <nav className="hidden md:flex space-x-6 items-center">
          {["Home", "Shop", "Offers", "About", "Featured Products", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="text-lg relative transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Link
              href="/login"
              className="text-lg flex items-center transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300"
            >
              <FaUserAlt className="mr-2" /> Login
            </Link>
          </motion.div>
          <Cart />
        </nav>

        <motion.button
          className="md:hidden text-white hover:text-gray-800 dark:hover:text-gray-300 transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars className="h-7 w-7" />
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden fixed top-0 right-0 bg-yellow-600 text-white w-64 h-full z-50 dark:bg-yellow-700 dark:text-black shadow-lg"
          >
            <div className="p-6 space-y-6">
              <motion.button
                className="absolute top-4 left-4 text-white dark:text-black transition-transform duration-300 hover:scale-110"
                onClick={closeMenu}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="h-7 w-7" />
              </motion.button>

              {["Home", "Shop", "Offers", "About", "Featured Products", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="block text-xl py-3 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link
                  href="/login"
                  className=" text-xl py-3 flex items-center transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300"
                  onClick={closeMenu}
                >
                  <FaUserAlt className="mr-2" /> Login
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </header>
      </ThemeProvider>
   
  );
}
