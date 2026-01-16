import React from 'react';

const categories = [
  { name: 'Sheets & Pillowcases', price: '₹2000', image: '/images/img21.jpg' },
  // Aap yahan aur items add kar sakte hain, grid automatic adjust hoga
];

const Sheets = () => {
  return (
    <section className="py-12 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md z-10 shadow-sm">
                0% OFF
              </div>

              {/* Product Image */}
              <div className="h-48 w-full mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-2">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow text-center">
                <h3 className="text-sm md:text-base font-bold text-gray-700 mb-1 line-clamp-2 group-hover:text-teal-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-teal-600 font-black text-lg mb-4">
                  {category.price}
                </p>
                
                {/* Add to Cart Button */}
                <button className="mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white text-xs md:text-sm font-bold py-2.5 rounded-xl transition-all shadow-md active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sheets;