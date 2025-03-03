
import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleLoadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, products.length));
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Products</h2>
          <a href="/products" className="text-blinkit-green font-medium hover:underline">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {visibleProducts < products.length && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleLoadMore}
              className="btn-secondary transition-transform active:scale-95"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
