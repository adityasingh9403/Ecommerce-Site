import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const showNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 6 < products.length ? prevIndex + 6 : 0
    );
  };

  const showPrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 6 >= 0 ? prevIndex - 6 : Math.max(0, products.length - 6)
    );
  };

  const visibleProducts = [
    ...products.slice(startIndex, startIndex + 6),
    ...products.slice(0, Math.max(0, startIndex + 6 - products.length)),
  ].slice(0, 6);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold">{error}</div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-black text-gray-800 text-center mb-10 tracking-tight">
        Product List
      </h1>

      <div className="relative group">
        {/* Left Arrow */}
        <button 
          onClick={showPrevious} 
          className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl text-teal-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300 border border-gray-100 active:scale-90"
        >
          <span className="text-xl md:text-2xl font-bold">&lt;</span>
        </button>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 px-2">
          {visibleProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white border border-gray-100 rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">
                0% OFF
              </div>

              {/* Product Image */}
              <div className="h-32 md:h-40 w-full mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-2">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow text-center">
                <p className="text-sm font-bold text-gray-700 mb-1 line-clamp-1 group-hover:text-teal-600 transition-colors">
                  {product.title}
                </p>
                <p className="text-teal-600 font-black text-lg mb-4">
                  ₹{product.price}
                </p>
                <button className="mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={showNext} 
          className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl text-teal-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300 border border-gray-100 active:scale-90"
        >
          <span className="text-xl md:text-2xl font-bold">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default ProductList;