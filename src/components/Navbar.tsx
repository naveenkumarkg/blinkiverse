
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import LocationSelector from './LocationSelector';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import UserDropdown from './UserDropdown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link to="/" className="flex items-center">
            <img 
              src="https://blinkit.com/images/blinkit/blinkit-logo-24684.png" 
              alt="BlinkIt" 
              className="h-8"
            />
          </Link>
          <div className="hidden md:block">
            <LocationSelector />
          </div>
        </div>
        
        <nav className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blinkit-green transition-colors duration-200"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">{user?.name}</span>
              </button>
              
              {isMenuOpen && <UserDropdown onClose={() => setIsMenuOpen(false)} />}
            </div>
          ) : (
            <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-blinkit-green transition-colors duration-200">
              Login
            </Link>
          )}
          
          <Link 
            to="/cart" 
            className="flex items-center space-x-1 bg-blinkit-green text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-opacity-90"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium">Cart</span>
            {getCartCount() > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 bg-white text-blinkit-green text-xs font-bold rounded-full">
                {getCartCount()}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
