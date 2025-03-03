
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '../data/products';

const CategorySection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(scrollPosition - scrollAmount, 0)
        : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth);
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleContainerScroll = () => {
      setScrollPosition(container.scrollLeft);
    };

    container.addEventListener('scroll', handleContainerScroll);
    return () => container.removeEventListener('scroll', handleContainerScroll);
  }, []);

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = containerRef.current 
    ? scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth - 10
    : false;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Shop By Category</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full ${
                canScrollLeft 
                  ? 'bg-blinkit-lightGreen text-blinkit-green hover:bg-blinkit-green hover:text-white' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              } transition-all duration-200`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full ${
                canScrollRight 
                  ? 'bg-blinkit-lightGreen text-blinkit-green hover:bg-blinkit-green hover:text-white' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              } transition-all duration-200`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 space-x-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <div 
              key={category.id}
              className="flex-shrink-0 w-[120px] transition-transform duration-300 hover:scale-105"
            >
              <a href={`/category/${category.id}`} className="block text-center">
                <div className="rounded-lg overflow-hidden mb-2 bg-blinkit-gray p-2">
                  <img 
                    src={category.imageUrl} 
                    alt={category.name}
                    className="w-full h-24 object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                  {category.name}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
