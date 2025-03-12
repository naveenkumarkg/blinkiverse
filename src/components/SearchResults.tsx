
import { Loader2 } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';

interface SearchResultsProps {
  results: Product[];
  isLoading: boolean;
  onClose: () => void;
}

const SearchResults = ({ results, isLoading, onClose }: SearchResultsProps) => {
  const { addToCart } = useCart();

  if (isLoading) {
    return (
      <div className="absolute z-20 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-4">
        <div className="flex justify-center items-center py-8">
          <Loader2 className="w-6 h-6 text-blinkit-green animate-spin" />
          <span className="ml-2 text-sm text-gray-500">Searching...</span>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="absolute z-20 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-4">
        <div className="text-center py-8">
          <p className="text-sm text-gray-500">No results found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute z-20 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-[70vh] overflow-y-auto">
      <div className="p-2">
        <div className="flex justify-between items-center px-2 py-1">
          <h3 className="text-sm font-medium text-gray-700">Search Results</h3>
          <button 
            onClick={onClose} 
            className="text-xs text-blinkit-green hover:underline"
          >
            Close
          </button>
        </div>
        
        <div className="mt-2">
          {results.map((product) => (
            <div 
              key={product.id} 
              className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-12 h-12 object-contain" 
              />
              <div className="ml-3 flex-1">
                <h4 className="text-sm font-medium text-gray-800">{product.name}</h4>
                <p className="text-xs text-gray-500">{product.unit} • {product.category}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold">₹{product.price}</span>
                <button 
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="mt-1 text-xs bg-blinkit-green text-white px-3 py-1 rounded"
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
