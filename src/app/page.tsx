import Header from "@/components/header";
import SearchBar from "@/components/searchBar";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/footer";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header cartCount={0} />
      <SearchBar allProducts={[]} />
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <ProductSection/>
      <Footer />
    </div>
  );
}
