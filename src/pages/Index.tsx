
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import ProductGrid from '@/components/ProductGrid';
import DeliveryBanner from '@/components/DeliveryBanner';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <img 
            src="https://blinkit.com/images/blinkit/blinkit-logo-24684.png" 
            alt="BlinkIt" 
            className="h-12 mb-4 animate-pulse"
          />
          <div className="w-16 h-16 border-t-4 border-blinkit-green border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <DeliveryBanner />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
