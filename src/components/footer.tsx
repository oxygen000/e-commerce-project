"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h4 className="font-semibold mb-2">Shopping</h4>
          <ul>
            <li><Link href="/shop?category=men" className="text-gray-400 hover:text-white transition-colors">Men&apos;s Clothing</Link></li>
            <li><Link href="/shop?category=women" className="text-gray-400 hover:text-white transition-colors">Women&apos;s Clothing</Link></li>
            <li><Link href="/shop?category=kids" className="text-gray-400 hover:text-white transition-colors">Kids&apos; Clothing</Link></li>
            <li><Link href="/shop?category=sports" className="text-gray-400 hover:text-white transition-colors">Sportswear</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul>
            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Information</h4>
          <ul>
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} Fashion Store. All rights reserved.</p>
      </div>
    </footer>
  );
}
