import React from 'react';

const Pagination = ({ totalProducts, productsPerPage, setCurrentPage, currentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (totalPages <= 1) return null;

  // Logic to calculate which page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const showMax = 5; // Mobile par kitne buttons dikhane hain

    if (totalPages <= showMax) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first page
      pages.push(1);

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) end = 4;
      if (currentPage >= totalPages - 1) start = totalPages - 3;

      if (start > 2) pages.push('...');
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push('...');

      // Always show last page
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-4 my-8 px-4">
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-teal-500 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-600 transition-all duration-300 shadow-sm active:scale-90"
          aria-label="Previous Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dynamic Page Numbers */}
        <div className="flex items-center gap-1 sm:gap-2">
          {getPageNumbers().map((number, index) => (
            <React.Fragment key={index}>
              {number === '...' ? (
                <span className="px-1 text-gray-400 font-bold">...</span>
              ) : (
                <button
                  onClick={() => setCurrentPage(number)}
                  className={`min-w-[38px] sm:min-w-[42px] h-10 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm
                    ${currentPage === number 
                      ? 'bg-teal-500 text-white shadow-teal-200 ring-2 ring-teal-500 ring-offset-2 scale-105' 
                      : 'bg-white border border-gray-100 text-gray-600 hover:border-teal-500 hover:text-teal-500 active:scale-95'
                    }`}
                >
                  {number}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-teal-500 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-600 transition-all duration-300 shadow-sm active:scale-90"
          aria-label="Next Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Info for Screen Readers / Mobile users */}
      <p className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-widest">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;