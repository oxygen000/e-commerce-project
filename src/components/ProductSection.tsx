// components/ProductSection.tsx
"use client";
import React from "react";
import CardItem from "./CardItem";

// تعريف هيكل البيانات للمنتجات
interface Product {
  name: string;
  price: number;
  image: string;
  category: string;
}

const allProducts: Product[] = [
  { name: "قميص رجالي", price: 199.99, image: "/path-to-image-men1.jpg", category: "الملابس الرجالية" },
  { name: "فستان نسائي", price: 299.99, image: "/path-to-image-women1.jpg", category: "الملابس النسائية" },
  { name: "سروال جينز", price: 249.99, image: "/path-to-image-kids1.jpg", category: "ملابس الأطفال" },
  { name: "جاكيت شتوي", price: 399.99, image: "/path-to-image-sports1.jpg", category: "الملابس الرياضية" },
  { name: "قميص فاخر", price: 499.99, image: "/path-to-image-luxury1.jpg", category: "الملابس الفاخرة" },
  { name: "شورت رياضي", price: 150.99, image: "/path-to-image-sports2.jpg", category: "الملابس الرياضية" },
  { name: "فستان سهرات", price: 599.99, image: "/path-to-image-women2.jpg", category: "الملابس النسائية" },
  { name: "جينز طويل", price: 250.00, image: "/path-to-image-men2.jpg", category: "الملابس الرجالية" },
  { name: "ملابس أطفال شتوي", price: 180.00, image: "/path-to-image-kids2.jpg", category: "ملابس الأطفال" },
  { name: "جاكيت فخم", price: 850.00, image: "/path-to-image-luxury2.jpg", category: "الملابس الفاخرة" },
];

// دالة لفرز المنتجات بشكل عشوائي
const shuffleProducts = (products: Product[]) => {
  return products.sort(() => Math.random() - 0.5);
};

const ProductSection: React.FC = () => {
  // تقسيم المنتجات حسب الفئات
  const categories = Array.from(new Set(allProducts.map((product) => product.category)));

  return (
    <div className="space-y-16">
      {categories.map((category) => {
        const categoryProducts = shuffleProducts(
          allProducts.filter((product) => product.category === category)
        );
        
        return (
          <section key={category} className="py-12 bg-background-light dark:bg-gray-900">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categoryProducts.map((product, index) => (
                  <CardItem
                    key={index}
                    image={product.image}
                    title={product.name}
                    description={`وصف للمنتج ${product.name}`}
                    price={product.price}
                    onAddToCart={() => console.log(`تمت إضافة ${product.name} إلى العربة`)}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductSection;
