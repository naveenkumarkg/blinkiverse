
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLocation } from '@/contexts/LocationContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const { currentLocation } = useLocation();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      // Redirect to success page or show success toast
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/" className="flex items-center text-gray-700 hover:text-blinkit-green">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Continue Shopping</span>
            </Link>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
          
          {items.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                <h2 className="text-xl font-medium text-gray-800 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-6">Add items to get started</p>
                <Link 
                  to="/" 
                  className="bg-blinkit-green text-white px-6 py-2 rounded-md font-medium transition-colors hover:bg-opacity-90"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <h2 className="font-medium text-gray-800">
                      Cart Items ({items.length})
                    </h2>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <div key={item.product.id} className="p-4 flex">
                        <div className="w-20 h-20 flex-shrink-0">
                          <img 
                            src={item.product.imageUrl} 
                            alt={item.product.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-gray-800">
                              {item.product.name}
                            </h3>
                            <button 
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <p className="text-xs text-gray-500">{item.product.unit}</p>
                          
                          <div className="mt-2 flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-sm font-bold">₹{item.product.price}</span>
                              {item.product.originalPrice && (
                                <span className="text-xs text-gray-400 line-through ml-2">
                                  ₹{item.product.originalPrice}
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center border border-blinkit-green rounded overflow-hidden">
                              <button 
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="flex items-center justify-center w-8 h-8 bg-white text-blinkit-green transition-colors hover:bg-blinkit-lightGreen"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="flex items-center justify-center w-8 h-8 bg-blinkit-green text-white transition-colors hover:bg-opacity-90"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-24">
                  <div className="p-4 border-b border-gray-100">
                    <h2 className="font-medium text-gray-800">Order Summary</h2>
                  </div>
                  
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Item Total</span>
                        <span className="font-medium">₹{getCartTotal()}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span className="font-medium">₹20</span>
                      </div>
                      
                      <div className="border-t border-gray-100 my-2 pt-2">
                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>₹{getCartTotal() + 20}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 border-t border-gray-100">
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Delivery Address</h3>
                      {currentLocation ? (
                        <div className="bg-white p-3 rounded border border-gray-200 text-sm">
                          <p className="font-medium">{currentLocation.name}</p>
                          <p className="text-gray-600">{currentLocation.address}</p>
                          <p className="text-gray-600">{currentLocation.pincode}</p>
                        </div>
                      ) : (
                        <div className="bg-white p-3 rounded border border-gray-200 text-sm text-gray-500">
                          No delivery address selected
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut || !currentLocation || items.length === 0}
                      className={`w-full py-3 rounded-md text-white font-medium flex items-center justify-center
                        ${(!isCheckingOut && currentLocation && items.length > 0) 
                          ? 'bg-blinkit-green hover:bg-opacity-90' 
                          : 'bg-gray-300 cursor-not-allowed'}`}
                    >
                      {isCheckingOut ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          Processing...
                        </>
                      ) : (
                        'Place Order'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
