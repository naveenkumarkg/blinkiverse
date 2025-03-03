
import { useState } from 'react';
import { MapPin } from 'lucide-react';

const LocationSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('Select Location');

  const locations = [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ'
  ];

  const handleSelectLocation = (loc: string) => {
    setLocation(loc);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blinkit-green transition-colors duration-200"
      >
        <MapPin className="w-4 h-4" />
        <span className="max-w-[120px] truncate">{location}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-scale-in">
          <div className="py-1">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => handleSelectLocation(loc)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blinkit-green"
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
