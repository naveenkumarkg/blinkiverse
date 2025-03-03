
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blinkit-lightGreen/40 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className={`flex flex-col items-center justify-center space-y-8 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Groceries Delivered in <span className="text-blinkit-green">10 Minutes</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience the future of grocery shopping with doorstep delivery faster than ever before.
            </p>
            
            <SearchBar />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl">
            <button className="btn-primary w-full sm:w-auto">
              Delivery Now
            </button>
            <button className="btn-secondary w-full sm:w-auto">
              Schedule for Later
            </button>
          </div>
          
          <div className="hidden md:block w-full max-w-5xl mt-8">
            <img 
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg" 
              alt="Fresh groceries" 
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
