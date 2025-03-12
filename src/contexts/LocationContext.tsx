
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

interface Location {
  id: string;
  name: string;
  address: string;
  pincode: string;
  isDefault?: boolean;
}

interface LocationContextType {
  currentLocation: Location | null;
  savedLocations: Location[];
  isDetecting: boolean;
  setCurrentLocation: (location: Location) => void;
  addSavedLocation: (location: Location) => void;
  removeSavedLocation: (locationId: string) => void;
  detectCurrentLocation: () => Promise<void>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

const demoLocations: Location[] = [
  {
    id: '1',
    name: 'Home',
    address: '123 Main St, Apt 4B',
    pincode: '110001',
    isDefault: true
  },
  {
    id: '2',
    name: 'Work',
    address: '456 Office Park, Building 7',
    pincode: '110002'
  }
];

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [savedLocations, setSavedLocations] = useState<Location[]>(demoLocations);
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    // Load saved locations from localStorage
    const saved = localStorage.getItem('savedLocations');
    const current = localStorage.getItem('currentLocation');
    
    if (saved) {
      try {
        setSavedLocations(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to parse saved locations:', error);
      }
    }
    
    if (current) {
      try {
        setCurrentLocation(JSON.parse(current));
      } catch (error) {
        console.error('Failed to parse current location:', error);
      }
    } else if (savedLocations.length > 0) {
      // Set default location
      const defaultLocation = savedLocations.find(loc => loc.isDefault) || savedLocations[0];
      setCurrentLocation(defaultLocation);
      localStorage.setItem('currentLocation', JSON.stringify(defaultLocation));
    }
  }, []);

  const updateCurrentLocation = (location: Location) => {
    setCurrentLocation(location);
    localStorage.setItem('currentLocation', JSON.stringify(location));
    toast({
      title: 'Location updated',
      description: `Delivering to ${location.name || location.address}`
    });
  };

  const addSavedLocation = (location: Location) => {
    const newLocations = [...savedLocations, { ...location, id: Math.random().toString(36).substr(2, 9) }];
    setSavedLocations(newLocations);
    localStorage.setItem('savedLocations', JSON.stringify(newLocations));
    toast({
      title: 'Location saved',
      description: `${location.name || location.address} has been saved`
    });
  };

  const removeSavedLocation = (locationId: string) => {
    const newLocations = savedLocations.filter(loc => loc.id !== locationId);
    setSavedLocations(newLocations);
    localStorage.setItem('savedLocations', JSON.stringify(newLocations));
    
    // If removed location was the current one, set a new current location
    if (currentLocation && currentLocation.id === locationId) {
      const newCurrentLocation = newLocations.length > 0 ? newLocations[0] : null;
      setCurrentLocation(newCurrentLocation);
      if (newCurrentLocation) {
        localStorage.setItem('currentLocation', JSON.stringify(newCurrentLocation));
      } else {
        localStorage.removeItem('currentLocation');
      }
    }
    
    toast({
      title: 'Location removed',
      description: 'The selected location has been removed'
    });
  };

  const detectCurrentLocation = async (): Promise<void> => {
    setIsDetecting(true);
    
    try {
      // Simulate geolocation API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const detectedLocation: Location = {
        id: 'detected',
        name: 'Current Location',
        address: 'Detected Address, Some Street',
        pincode: '110003'
      };
      
      updateCurrentLocation(detectedLocation);
      setIsDetecting(false);
    } catch (error) {
      console.error('Error detecting location:', error);
      toast({
        title: 'Location detection failed',
        description: 'Unable to detect your current location',
        variant: 'destructive'
      });
      setIsDetecting(false);
    }
  };

  return (
    <LocationContext.Provider value={{
      currentLocation,
      savedLocations,
      isDetecting,
      setCurrentLocation: updateCurrentLocation,
      addSavedLocation,
      removeSavedLocation,
      detectCurrentLocation
    }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
