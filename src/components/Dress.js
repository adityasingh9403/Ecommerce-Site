import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Clothing', price: '₹5248.', image: '/images/img16.jpg' },
  { name: 'Electronics', price: '₹892', image: '/images/img17.jpg' },
  { name: 'Home & Kitchen', price: '₹892', image: '/images/img18.jpg' },
  { name: 'Beauty & Personally Care', price: '₹890', image: '/images/img19.jpg' },
  { name: 'Toys & Games', price: '₹585', image: '/images/img20.jpg' },
];

const Dress = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-white">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
        
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="relative flex flex-col bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded z-10">
              0% OFF
            </div>

            {/* Product Image */}
            <div className="h-40 w-full mb-4 overflow-hidden rounded-lg">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow text-center">
              <p className="text-sm font-semibold text-gray-700 mb-1 truncate">{category.name}</p>
              <p className="text-teal-600 font-bold mb-4">{category.price}</p>
              
              <button className="mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold py-2 rounded transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}

        {/* Special Offer Card */}
        <div className="flex flex-col items-center justify-center bg-teal-50 border-2 border-dashed border-teal-200 rounded-xl p-6 text-center">
          <div className="mb-2">
            <p className="text-2xl font-black text-gray-800 leading-tight">Offer</p>
            <p className="text-sm text-teal-600 font-medium">Special Offer</p>
          </div>
          
          <Link to="/newproductspecial" className="mt-4 w-full">
            <button className="w-full bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-bold py-2 rounded-lg transition-all text-sm shadow-sm">
              View More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Dress;