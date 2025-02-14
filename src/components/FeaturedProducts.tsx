// components/FeaturedProducts.tsx
"use client";
import Card from "./card";
import { motion } from "framer-motion";

interface Product {
  name: string;
  image: string;
}

const featuredProducts: Product[] = [
  { name: "Men's Shirt", image: "/test2.jpg" },
  { name: "Women's Dress", image: "/test.jpg" },
  { name: "Jeans Pants", image: "/test2.jpg" },
  { name: "Winter Jacket", image: "/test.jpg" },
];

export default function FeaturedProducts() {


  return (
    <section id="featured" className="py-12 bg-background-light dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <Card
                image={product.image}
                title={product.name}
                description="A premium product description"
                
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
