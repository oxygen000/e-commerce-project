"use client";
import Image from "next/image";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: "الملابس الرجالية", image: "/path-to-image-men.jpg" },
  { name: "الملابس النسائية", image: "/path-to-image-women.jpg" },
  { name: "ملابس الأطفال", image: "/path-to-image-kids.jpg" },
  { name: "الملابس الرياضية", image: "/path-to-image-sports.jpg" },
  { name: "الملابس الفاخرة", image: "/path-to-image-luxury.jpg" },
];

export default function FeaturedCategories() {
  return (
    <section id="shop" className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">تصنيفات الملابس</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 group transition-all duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={300}
                className="rounded-t-lg group-hover:opacity-80 transition-all duration-300"
              />
              <h3 className="text-lg font-semibold mt-4">{category.name}</h3>
              <p className="text-gray-600">
                استعرض تشكيلتنا المتنوعة من {category.name}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
