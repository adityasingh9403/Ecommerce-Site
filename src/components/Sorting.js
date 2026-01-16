import React from 'react';

const Sorting = ({ setSortOption }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="relative inline-block w-full sm:w-64">
      <select 
        onChange={handleSortChange} 
        className="block w-full appearance-none bg-white border border-gray-200 text-gray-700 py-2.5 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all cursor-pointer font-medium shadow-sm"
      >
        <option value="relevance">Relevance</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
      
      {/* Custom Chevron Arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
        <svg 
          className="fill-current h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Sorting;