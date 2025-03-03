
import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import LocationSelector from './LocationSelector';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a href="/" className="flex items-center">
            <img 
              src="https://blinkit.com/images/blinkit/blinkit-logo-24684.png" 
              alt="BlinkIt" 
              className="h-8"
            />
          </a>
          <div className="hidden md:block">
            <LocationSelector />
          </div>
        </div>
        
        <nav className="flex items-center space-x-4">
          <a href="/login" className="text-sm font-medium text-gray-700 hover:text-blinkit-green transition-colors duration-200">
            Login
          </a>
          <button className="flex items-center space-x-1 bg-blinkit-green text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-opacity-90">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium">Cart</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
