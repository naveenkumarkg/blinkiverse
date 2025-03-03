
import { Clock, Check, Calendar } from 'lucide-react';
import { deliveryTimes } from '../data/products';

const DeliveryBanner = () => {
  return (
    <section className="py-12 bg-blinkit-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Choose Your Delivery Time</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {deliveryTimes.map((option) => (
            <div 
              key={option.id} 
              className="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer border border-transparent hover:border-blinkit-green/20"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blinkit-lightGreen rounded-full">
                  {option.id === '1' ? (
                    <Clock className="w-6 h-6 text-blinkit-green" />
                  ) : option.id === '2' ? (
                    <Check className="w-6 h-6 text-blinkit-green" />
                  ) : (
                    <Calendar className="w-6 h-6 text-blinkit-green" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{option.time}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;
