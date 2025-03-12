
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User, ShoppingBag, MapPin, Heart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface UserDropdownProps {
  onClose: () => void;
}

const UserDropdown = ({ onClose }: UserDropdownProps) => {
  const { user, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-scale-in"
    >
      <div className="p-3 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="bg-blinkit-lightGreen p-2 rounded-full">
            <User className="w-5 h-5 text-blinkit-green" />
          </div>
          <div>
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>
      
      <div className="py-1">
        <Link 
          to="/orders" 
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          <ShoppingBag className="w-4 h-4 mr-3 text-gray-500" />
          My Orders
        </Link>
        
        <Link 
          to="/addresses" 
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          <MapPin className="w-4 h-4 mr-3 text-gray-500" />
          Saved Addresses
        </Link>
        
        <Link 
          to="/wishlist" 
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          <Heart className="w-4 h-4 mr-3 text-gray-500" />
          Wishlist
        </Link>
      </div>
      
      <div className="py-1 border-t border-gray-100">
        <button 
          onClick={handleLogout}
          className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          <LogOut className="w-4 h-4 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
