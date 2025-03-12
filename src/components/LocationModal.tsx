
import { useState } from 'react';
import { X, MapPin, Loader2 } from 'lucide-react';
import { useLocation } from '@/contexts/LocationContext';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationModal = ({ isOpen, onClose }: LocationModalProps) => {
  const { addSavedLocation, savedLocations, setCurrentLocation } = useLocation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'enter-pincode' | 'enter-address'>('enter-pincode');

  const handlePincodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to validate pincode
    setTimeout(() => {
      setIsLoading(false);
      setStep('enter-address');
    }, 1000);
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newLocation = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      address,
      pincode
    };
    
    addSavedLocation(newLocation);
    setCurrentLocation(newLocation);
    
    // Reset form and close modal
    setName('');
    setAddress('');
    setPincode('');
    setStep('enter-pincode');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Add delivery location</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4">
          {step === 'enter-pincode' ? (
            <form onSubmit={handlePincodeSubmit}>
              <div className="mb-4">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter your pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit pincode"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blinkit-green"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || pincode.length !== 6}
                className={`w-full py-3 rounded-md text-white font-medium flex items-center justify-center
                  ${pincode.length === 6 && !isLoading ? 'bg-blinkit-green' : 'bg-gray-300'}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Checking...
                  </>
                ) : (
                  'Check'
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleAddressSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Save address as
                </label>
                <div className="flex space-x-2 mb-2">
                  {['Home', 'Work', 'Other'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setName(type)}
                      className={`px-4 py-2 text-sm rounded-md ${
                        name === type 
                          ? 'bg-blinkit-lightGreen text-blinkit-green border border-blinkit-green'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Complete address
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Flat, House no., Building, Company, Apartment"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blinkit-green min-h-[100px]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-blinkit-green" />
                  <span>Pincode: {pincode}</span>
                  <button
                    type="button"
                    onClick={() => setStep('enter-pincode')}
                    className="text-blinkit-green hover:underline"
                  >
                    Change
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={!address.trim()}
                className={`w-full py-3 rounded-md text-white font-medium 
                  ${address.trim() ? 'bg-blinkit-green' : 'bg-gray-300'}`}
              >
                Save Address
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
