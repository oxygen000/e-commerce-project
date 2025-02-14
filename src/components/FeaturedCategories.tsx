"use client";
import React, { useState, useEffect } from "react";
import Card from "./card";
import { motion } from "framer-motion";
import CardLoader from "./CardLoader";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: "Men's Clothing", image: "/test.jpg" },
  { name: "Women's Clothing", image: "/test2.jpg" },
  { name: "Kids' Clothing", image: "/test.jpg" },
  { name: "Sportswear", image: "/test2.jpg" },
  { name: "Luxury Clothing", image: "/test.jpg" },
];

export default function FeaturedCategories() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (this could be an API call or fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 2000); // Adjust the time as needed
  }, []);

  if (loading) {
    // Display loading screen or spinner
    return (
      <CardLoader/>
    );
  }

  return (
    <section id="shop" className="py-12 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Clothing Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <Card
                image={category.image}
                title={category.name}
                description={`Browse our diverse collection of ${category.name}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
