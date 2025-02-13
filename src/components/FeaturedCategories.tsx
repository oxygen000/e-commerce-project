// components/FeaturedCategories.tsx
"use client";
import Card from "./card";

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
    <section id="shop" className="py-12 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          تصنيفات الملابس
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              image={category.image}
              title={category.name}
              description={`استعرض تشكيلتنا المتنوعة من ${category.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
