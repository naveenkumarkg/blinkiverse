
import { useState } from 'react';
import { MapPin, ChevronDown, Navigation, Plus } from 'lucide-react';
import { useLocation } from '@/contexts/LocationContext';
import LocationModal from './LocationModal';

const LocationSelector = () => {
  const { currentLocation, isDetecting, detectCurrentLocation } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blinkit-green transition-colors duration-200"
        >
          <MapPin className="w-4 h-4" />
          <span className="max-w-[120px] truncate">
            {currentLocation ? (currentLocation.name || currentLocation.address) : 'Select Location'}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-2 w-64 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-scale-in">
            <div className="py-1">
              <button
                onClick={detectCurrentLocation}
                disabled={isDetecting}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {isDetecting ? (
                  <>
                    <span className="w-4 h-4 mr-2 rounded-full border-2 border-blinkit-green border-t-transparent animate-spin" />
                    Detecting...
                  </>
                ) : (
                  <>
                    <Navigation className="w-4 h-4 mr-2 text-blinkit-green" />
                    Detect current location
                  </>
                )}
              </button>
              
              <button
                onClick={handleOpenModal}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4 mr-2 text-blinkit-green" />
                Add new address
              </button>
              
              <div className="border-t border-gray-100 my-1" />
              
              <div className="px-4 py-2">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Saved Addresses</h3>
              </div>

              {currentLocation && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 bg-gray-50"
                >
                  <MapPin className="w-4 h-4 mr-2 text-blinkit-green" />
                  <div className="flex-1 overflow-hidden">
                    <p className="font-medium truncate">{currentLocation.name}</p>
                    <p className="text-xs text-gray-500 truncate">{currentLocation.address}</p>
                  </div>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default LocationSelector;
