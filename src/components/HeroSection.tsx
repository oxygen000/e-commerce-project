export default function HeroSection() {
  return (
    <section id="home" className="relative bg-yellow-500 text-white h-[400px] flex items-center justify-center dark:bg-yellow-600 dark:text-gray-200 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full bg-yellow-700 p-2 text-center font-semibold animate-pulse dark:bg-yellow-600">
        <p>🎉 عرض خاص! خصم 30% على جميع المنتجات هذا الأسبوع! 🛍️</p>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">أهلاً بك في متجر الملابس الإلكتروني</h1>
        <p className="mt-2 text-lg">اكتشف أحدث صيحات الموضة مع أفضل العروض</p>
      </div>
    </section>
  );
}
