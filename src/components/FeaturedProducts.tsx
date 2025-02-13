// components/FeaturedProducts.tsx
"use client";
import Card from "./card";

interface Product {
  name: string;
  price: number;
  image: string;
}

const featuredProducts: Product[] = [
  { name: "قميص رجالي", price: 199.99, image: "/path-to-image-product1.jpg" },
  { name: "فستان نسائي", price: 299.99, image: "/path-to-image-product2.jpg" },
  { name: "سروال جينز", price: 249.99, image: "/path-to-image-product3.jpg" },
  { name: "جاكيت شتوي", price: 399.99, image: "/path-to-image-product4.jpg" },
];

export default function FeaturedProducts() {
  const handleAddToCart = (productName: string) => {
    console.log(`تمت إضافة ${productName} إلى العربة`);
  };

  return (
    <section id="featured" className="py-12 bg-background-light dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
          منتجات مميزة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.name}
              description="وصف المنتج المميز"
              price={product.price}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
