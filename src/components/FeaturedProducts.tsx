"use client";
import Image from "next/image";

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
    <section id="featured" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">منتجات مميزة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center group transition-all duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={250}
                className="rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600">وصف المنتج المميز</p>
              <span className="text-yellow-500 font-bold mt-2 block">
                ج.م {product.price}
              </span>
              <button
                className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all"
                onClick={() => handleAddToCart(product.name)}
              >
                إضافة إلى العربة
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
