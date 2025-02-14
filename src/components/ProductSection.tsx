"use client";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CardItem from "./CardItem";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/slices/cartSlice";

// CartItem interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

// Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number; // Rating out of 5
  sales: number;  // Number of sales
  inStock: boolean; // Availability of the product
}

const allProducts: Product[] = [
  { id: 1, name: "Men's Shirt", price: 199.99, image: "/test2.jpg", category: "Men's Clothing", rating: 4, sales: 150, inStock: true },
  { id: 2, name: "Women's Dress", price: 299.99, image: "/test.jpg", category: "Women's Clothing", rating: 5, sales: 250, inStock: false },
  { id: 3, name: "Jeans Pants", price: 249.99, image: "/test2.jpg", category: "Kids' Clothing", rating: 3, sales: 100, inStock: true },
  { id: 4, name: "Winter Jacket", price: 399.99, image: "/test.jpg", category: "Sportswear", rating: 4, sales: 200, inStock: true },
  { id: 5, name: "Luxury Shirt", price: 499.99, image: "/test2.jpg", category: "Luxury Clothing", rating: 5, sales: 300, inStock: true },
  { id: 6, name: "Sports Shorts", price: 150.99, image: "/test.jpg", category: "Sportswear", rating: 4, sales: 180, inStock: true },
  { id: 7, name: "Evening Dress", price: 599.99, image: "/test2.jpg", category: "Women's Clothing", rating: 5, sales: 120, inStock: false },
  { id: 8, name: "Long Jeans", price: 250.00, image: "/test.jpg", category: "Men's Clothing", rating: 4, sales: 220, inStock: true },
  { id: 9, name: "Winter Kids Outfit", price: 180.00, image: "/test2.jpg", category: "Kids' Clothing", rating: 4, sales: 170, inStock: true },
  { id: 10, name: "Luxury Jacket", price: 850.00, image: "/test.jpg", category: "Luxury Clothing", rating: 5, sales: 80, inStock: true },
];

// Function to shuffle products randomly
const shuffleProducts = (products: Product[]) => {
  return products.sort(() => Math.random() - 0.5);
};

const ProductSection: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  // Load products after the component mounts
  useEffect(() => {
    setProducts(allProducts);
  }, []);

  // Define categories dynamically based on the products
  const categories = Array.from(new Set(products.map((product) => product.category)));

  // Handle adding to the cart (Redux action)
  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      imageUrl: product.image, // Make sure `imageUrl` is used here
      quantity: 1, // Default value
    };
    dispatch(addItemToCart(cartItem));
  };

  return (
    <div className="space-y-16">
      {categories.map((category) => {
        const categoryProducts = shuffleProducts(
          products.filter((product) => product.category === category)
        );

        return (
          <section key={category} className="py-12 bg-background-light dark:bg-gray-900">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <CardItem
                    key={product.id}
                    image={product.image}
                    title={product.name}
                    description={`Description of ${product.name}`}
                    price={product.price}
                    rating={product.rating}
                    sales={product.sales}
                    inStock={product.inStock}
                    onAddToCart={() => handleAddToCart(product)} // Add the function to handle adding to cart
                    cartIcon={<FaShoppingCart size={20} className="ml-2 text-primary" />}
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
