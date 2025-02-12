export default function Footer() {
    return (
<footer className="bg-gray-800 text-white py-6">
<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
  <div>
    <h4 className="font-semibold mb-2">التسوق</h4>
    <ul>
      <li><a href="#shop" className="text-gray-400 hover:text-white">الملابس الرجالية</a></li>
      <li><a href="#shop" className="text-gray-400 hover:text-white">الملابس النسائية</a></li>
      <li><a href="#shop" className="text-gray-400 hover:text-white">ملابس الأطفال</a></li>
      <li><a href="#shop" className="text-gray-400 hover:text-white">الملابس الرياضية</a></li>
    </ul>
  </div>
  <div>
    <h4 className="font-semibold mb-2">الدعم</h4>
    <ul>
      <li><a href="#faq" className="text-gray-400 hover:text-white">الأسئلة الشائعة</a></li>
      <li><a href="#contact" className="text-gray-400 hover:text-white">اتصل بنا</a></li>
      <li><a href="#privacy" className="text-gray-400 hover:text-white">سياسة الخصوصية</a></li>
      <li><a href="#terms" className="text-gray-400 hover:text-white">الشروط والأحكام</a></li>
    </ul>
  </div>
  <div>
    <h4 className="font-semibold mb-2">متابعتنا</h4>
    <ul>
      <li><a href="https://facebook.com" className="text-gray-400 hover:text-white">فيسبوك</a></li>
      <li><a href="https://twitter.com" className="text-gray-400 hover:text-white">تويتر</a></li>
      <li><a href="https://instagram.com" className="text-gray-400 hover:text-white">إنستجرام</a></li>
    </ul>
  </div>
  <div>
    <h4 className="font-semibold mb-2">المعلومات</h4>
    <ul>
      <li><a href="#about" className="text-gray-400 hover:text-white">عن المتجر</a></li>
      <li><a href="#careers" className="text-gray-400 hover:text-white">الوظائف</a></li>
      <li><a href="#blog" className="text-gray-400 hover:text-white">المدونة</a></li>
    </ul>
  </div>
</div>
<div className="text-center mt-6">
  <p>&copy; {new Date().getFullYear()} متجر الملابس الإلكتروني. جميع الحقوق محفوظة.</p>
</div>
</footer>
    );
  }