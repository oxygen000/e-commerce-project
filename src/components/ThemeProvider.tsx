"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {children}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed bottom-6 right-6 p-5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-xl transition-all transform hover:scale-125 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-400 dark:from-yellow-500 dark:to-yellow-700 dark:text-gray-800 dark:hover:scale-110 dark:focus:ring-yellow-300"
      >
        {theme === "dark" ? (
          <FaSun size={20} className="transition-transform transform duration-300 hover:rotate-180" />
        ) : (
          <FaMoon size={20} className="transition-transform transform duration-300 hover:rotate-180" />
        )}
      </button>
    </>
  );
}
