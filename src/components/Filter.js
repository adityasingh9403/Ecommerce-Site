import React, { useState } from 'react';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mb-8">
      {/* Top Action Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Left: Filter Toggle & Status */}
        <div className="flex items-center justify-between md:justify-start gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="text-sm md:text-base">{isOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
          
          <div className="text-gray-400 text-xs md:text-sm font-medium">
            <span className="hidden sm:inline">Result: </span>
            <span className="text-teal-600 font-bold">120 Products</span>
          </div>
        </div>

        {/* Right: Quick Sort Scrollable Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-2 px-2 md:mx-0 md:px-0">
          {['Newest', 'Price: Low-High', 'Best Seller', 'Top Rated'].map((label) => (
            <button 
              key={label} 
              className="whitespace-nowrap px-4 py-2 bg-gray-50 hover:bg-teal-50 text-gray-600 hover:text-teal-600 rounded-full text-xs font-bold transition-all border border-gray-200 hover:border-teal-200"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Filter Content Area */}
      <div 
        className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-inner border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Column 1: Price Range */}
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-black text-gray-800 text-sm uppercase tracking-widest">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                Price Range
              </h4>
              <div className="px-2">
                <input 
                  type="range" 
                  min="0" 
                  max="10000"
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500" 
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-bold text-gray-600">₹0</span>
                  <span className="text-gray-300">──</span>
                  <span className="bg-teal-50 px-3 py-1 rounded-lg text-xs font-bold text-teal-600">₹10,000+</span>
                </div>
              </div>
            </div>

            {/* Column 2: Availability & Stock */}
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-black text-gray-800 text-sm uppercase tracking-widest">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                Availability
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {['In Stock Only', 'Include Out of Stock', 'Pre-Order'].map((item) => (
                  <label key={item} className="flex items-center group cursor-pointer">
                    <div className="relative flex items-center">
                      <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:bg-teal-500 checked:border-teal-500 transition-all" />
                      <svg className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-teal-600 transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Column 3: Rating & Reviews */}
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-black text-gray-800 text-sm uppercase tracking-widest">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                Customer Rating
              </h4>
              <div className="space-y-3">
                {[4, 3, 2].map((rating) => (
                  <button key={rating} className="flex items-center w-full hover:bg-gray-50 p-1 rounded-lg transition-colors group">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-200"}>★</span>
                      ))}
                    </div>
                    <span className="ml-3 text-xs font-bold text-gray-500 group-hover:text-teal-600">& Up</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Filter Footer Actions */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end gap-4">
            <button className="text-gray-400 hover:text-red-500 text-xs font-bold uppercase transition-colors">Clear All</button>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-black transition-all">Apply Filters</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;