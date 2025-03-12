
import { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { useSearch } from '@/contexts/SearchContext';
import SearchResults from './SearchResults';

const SearchBar = () => {
  const { query, setQuery, clearSearch, isSearching, searchResults } = useSearch();
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsResultsVisible(true);
  };

  const handleClear = () => {
    clearSearch();
    setIsResultsVisible(false);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto" ref={searchRef}>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search for groceries, fruits, vegetables..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsResultsVisible(true)}
          className="w-full px-12 py-3 text-sm bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blinkit-green/20 transition-all duration-200"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {isSearching ? (
            <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
          ) : (
            <Search className="w-5 h-5 text-gray-400" />
          )}
        </div>
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 p-1 text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Clear search</span>
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {isResultsVisible && query && (
        <SearchResults 
          results={searchResults} 
          isLoading={isSearching} 
          onClose={() => setIsResultsVisible(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;
