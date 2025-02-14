"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-yellow-500 text-white h-[400px] flex items-center justify-center dark:bg-yellow-600 dark:text-gray-200 transition-all duration-300"
    >
      <motion.div
        className="absolute top-0 left-0 w-full bg-yellow-700 p-2 text-center font-semibold animate-pulse dark:bg-yellow-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>🎉 Special Offer! Get 30% off on all products this week! 🛍️</p>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold">Welcome to the Online Clothing Store</h1>
        <p className="mt-2 text-lg">Discover the latest fashion trends with the best deals</p>
      </motion.div>
    </section>
  );
}
