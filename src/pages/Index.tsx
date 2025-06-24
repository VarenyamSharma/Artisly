
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ArtistCategoriesSection } from "@/components/sections/ArtistCategoriesSection";
import { FeaturedArtistsSection } from "@/components/sections/FeaturedArtistsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <HeroSection />
      <ArtistCategoriesSection />
      <FeaturedArtistsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
