
import { useState, useEffect } from 'react';
import { Plus, Minus, Clock } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, updateQuantity, items } = useCart();
  const [quantity, setQuantity] = useState(0);

  // Sync quantity with cart
  useEffect(() => {
    const cartItem = items.find(item => item.product.id === product.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [items, product.id]);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handleIncrement = () => {
    addToCart(product, 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const discountPercentage = product.discount || 0;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="relative">
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-blinkit-green text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercentage}% OFF
          </div>
        )}
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-40 object-contain p-4"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        {product.deliveryTime && (
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <Clock className="w-3 h-3 mr-1" />
            <span>{product.deliveryTime} delivery</span>
          </div>
        )}
        
        <h3 className="text-sm font-medium text-gray-800 mb-1 truncate" title={product.name}>
          {product.name}
        </h3>
        
        <p className="text-xs text-gray-500 mb-2">{product.unit}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <span className="text-sm font-bold">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through ml-2">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>
          
          {quantity === 0 ? (
            <button 
              onClick={handleAddToCart}
              className="text-xs bg-blinkit-green text-white px-3 py-1 rounded font-medium transition-colors duration-200 hover:bg-opacity-90"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center border border-blinkit-green rounded overflow-hidden">
              <button 
                onClick={handleDecrement}
                className="flex items-center justify-center w-7 h-7 bg-white text-blinkit-green transition-colors hover:bg-blinkit-lightGreen"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-7 text-center text-sm font-medium">{quantity}</span>
              <button 
                onClick={handleIncrement}
                className="flex items-center justify-center w-7 h-7 bg-blinkit-green text-white transition-colors hover:bg-opacity-90"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
