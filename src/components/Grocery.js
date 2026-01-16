import React from 'react';
import Footer from './Footer';

const categories = [
  { name: 'Poha', actualprice: '₹ 262.50', price: '₹ 262.49', image: '/images/img37.jpg' },
  { name: 'Rava', actualprice: '₹ 262.50', price: '₹ 262.49', image: '/images/img38.jpg' },
  { name: 'Turmeric Powder', actualprice: '₹ 52.50', price: '₹ 52.49', image: '/images/img39.jpg' },
  { name: 'Tide Plus', actualprice: '₹ 157.50', price: '₹ 157.49', image: '/images/img40.jpg' },
  { name: 'Tea', actualprice: '₹ 314.89', price: '₹ 312.90', image: '/images/img41.jpg' },
  { name: 'Salt', actualprice: '₹ 52.50', price: '₹ 52.49', image: '/images/img42.jpg' },
  { name: 'Aata', actualprice: '₹ 625.00', price: '₹ 525.00', image: '/images/img43.jpg' },
  { name: 'Toor Daal', actualprice: '₹ 167.50', price: '₹ 157.50', image: '/images/img44.jpg' },
  { name: 'Rice', actualprice: '₹ 209.95', price: '₹ 208.95', image: '/images/img45.jpg' },
  { name: 'Oil', actualprice: '₹ 115.0', price: '₹ 105.0', image: '/images/img46.jpg' },
  { name: 'Sugar', actualprice: '₹ 25.10', price: '₹ 23.10', image: '/images/img47.jpg' },
];

const Grocery = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="bg-[#14949d]/30 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-4 border-b border-gray-200">
        <div className="text-center md:text-left">
          <p className="text-gray-800 text-lg md:text-2xl font-bold tracking-wider uppercase">
            Grocery & Gourmet Food
          </p>
        </div>
        <div className="text-gray-600 text-sm md:text-base italic">
          <p>
            Home / Category / <span className="font-bold text-teal-600">Grocery</span>
          </p>
        </div>
      </div>

      {/* Product Grid Container */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-gray-100 rounded-xl p-3 md:p-4 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-teal-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm">
                0% OFF
              </div>

              {/* Product Image */}
              <div className="h-32 md:h-44 w-full mb-4 overflow-hidden rounded-lg flex items-center justify-center bg-gray-50">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" 
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 line-clamp-1">
                  {category.name}
                </h3>
                
                {/* Pricing */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-teal-600 font-extrabold text-sm md:text-lg">
                    {category.price}
                  </span>
                  <del className="text-gray-400 text-[10px] md:text-xs">
                    {category.actualprice}
                  </del>
                </div>

                {/* Add to Cart Button */}
                <button className="mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white text-xs md:text-sm font-bold py-2 rounded-lg transition-colors shadow-sm active:scale-95">
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Grocery;