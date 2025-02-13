"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ allProducts }: { allProducts: string[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setSuggestions(term.length > 0 ? allProducts.filter(product => product.toLowerCase().includes(term.toLowerCase())) : []);
  };

  return (
    <section id="search" className="py-6 bg-background dark:bg-secondary transition-all duration-300">
      <div className="container mx-auto flex justify-center relative">
        <div className="flex w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 shadow-md transition-all">
          <input 
            type="text" 
            placeholder="ابحث عن منتجات..." 
            value={searchTerm} 
            onChange={(e) => handleSearch(e.target.value)} 
            className="p-4 w-full rounded-l-md focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all"
          />
          <button 
            className="p-4 bg-primary text-white rounded-r-md hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition-all duration-200 ease-in-out"
          >
            <FaSearch size={20} />
          </button>
        </div>
        {suggestions.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md dark:bg-gray-700 max-h-60 overflow-y-auto">
            {suggestions.map((s, i) => (
              <div 
                key={i} 
                className="p-3 hover:bg-yellow-50 dark:hover:bg-yellow-500 cursor-pointer text-gray-900 dark:text-white transition-colors"
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
