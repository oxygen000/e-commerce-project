"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ allProducts }: { allProducts: string[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setSuggestions(term.length > 0 ? allProducts.filter(product => product.includes(term)) : []);
  };

  return (
    <section id="search" className="py-6 bg-yellow-50">
      <div className="container mx-auto flex justify-center relative">
        <div className="flex w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-md border border-gray-300">
          <input type="text" placeholder="ابحث عن منتجات..." value={searchTerm} onChange={(e) => handleSearch(e.target.value)} className="p-3 w-full rounded-l-md focus:outline-none" />
          <button className="p-3 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-600">
            <FaSearch />
          </button>
        </div>
        {suggestions.length > 0 && <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md">{suggestions.map((s, i) => <div key={i} className="p-2 hover:bg-yellow-50 cursor-pointer">{s}</div>)}</div>}
      </div>
    </section>
  );
}