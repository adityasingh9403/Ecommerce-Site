import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, title, price, discountPercentage, thumbnail, discountedTotal } = product;

  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10 shadow-sm">
        {discountPercentage}% OFF
      </div>

      {/* Product Image */}
      <div className="relative h-40 w-full mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-2">
        <img 
          src={thumbnail} 
          alt={title} 
          className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow space-y-2">
        <h3 className="text-gray-800 font-bold text-base md:text-lg line-clamp-1 group-hover:text-teal-600 transition-colors">
          {title}
        </h3>
        
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs line-through">${price.toFixed(2)}</span>
            <span className="text-teal-600 font-black text-lg">${discountedTotal.toFixed(2)}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500 bg-gray-50 p-2 rounded-lg">
            <p>Qty: <span className="font-bold text-gray-700">{product.quantity}</span></p>
            <p className="text-right">Total: <span className="font-bold text-gray-700">${product.total.toFixed(2)}</span></p>
          </div>
        </div>

        {/* View Details Button */}
        <Link 
          to={`/product/${id}`} 
          className="mt-auto block w-full text-center bg-gray-100 hover:bg-teal-500 hover:text-white text-teal-600 font-bold py-2.5 rounded-xl transition-all text-sm active:scale-95"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;