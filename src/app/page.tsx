import Header from "@/components/header";
import SearchBar from "@/components/searchBar";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/footer";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header cartCount={0} />
      <SearchBar allProducts={[]} />
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <Card/>
      <Footer />
    </div>
  );
}
