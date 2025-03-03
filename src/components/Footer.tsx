
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">BlinkIt</h3>
            <p className="text-gray-600 mb-4">
              Groceries delivered in minutes. Order fruits, vegetables, snacks, and daily essentials effortlessly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blinkit-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blinkit-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blinkit-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">Fruits & Vegetables</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">Dairy & Breakfast</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">Snacks & Munchies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">Bakery & Biscuits</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">Cold Drinks & Juices</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blinkit-green transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blinkit-green mt-0.5 mr-2" />
                <span className="text-gray-600">123 Grocery Street, Digital City, Internet, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blinkit-green mr-2" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blinkit-green mr-2" />
                <span className="text-gray-600">support@blinkit.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BlinkIt. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blinkit-green text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blinkit-green text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-blinkit-green text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
