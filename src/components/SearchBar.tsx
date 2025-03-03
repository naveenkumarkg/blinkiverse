
import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search for groceries, fruits, vegetables..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-12 py-3 text-sm bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blinkit-green/20 transition-all duration-200"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 p-1 text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Clear search</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
