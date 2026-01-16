import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Sorting from './Sorting';
import Filter from './Filter';
import Footer from './Footer';

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [sortOption, setSortOption] = useState('relevance');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Ab hum ise niche use karenge

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/carts');
        const data = await response.json();
        const allProducts = data.carts.flatMap(cart => cart.products);
        setProducts(allProducts);
        setError(null); // Success hone par error clear karein
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); // Empty array yahan sahi hai kyunki hume sirf mount par fetch karna hai

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Sorting Logic
  const sortedProducts = [...currentProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    return 0;
  });

  // Loading State UI
  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-teal-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-teal-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-teal-600 font-bold animate-pulse tracking-widest uppercase text-xs">Loading Catalog</p>
    </div>
  );

  // Error State UI (Ab 'error' use ho raha hai, toh build fail nahi hogi)
  if (error) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-red-100 text-center max-w-md">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-teal-500 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-600 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* 1. Dynamic Header Area */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 md:static z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-xl md:text-3xl font-black text-gray-900 leading-none">
              SHOP COLLECTION
            </h1>
            <p className="text-gray-400 text-[10px] md:text-sm font-medium uppercase tracking-[0.2em]">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} Items
            </p>
          </div>
          
          <div className="flex items-center gap-2 md:hidden">
             <div className="flex-1">
                <Sorting setSortOption={setSortOption} />
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
          
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-8 order-2 lg:order-1">
            <div className="bg-white p-2 md:p-0 rounded-2xl md:bg-transparent shadow-sm md:shadow-none border md:border-none border-gray-100">
               <Filter />
            </div>
            
            <div className="hidden lg:block mt-8 p-6 bg-teal-600 rounded-3xl text-white relative overflow-hidden">
               <p className="relative z-10 font-bold text-lg leading-tight">Get 20% Off on Bulk Orders</p>
               <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-teal-500 rounded-full opacity-50"></div>
            </div>
          </aside>

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            <div className="hidden md:flex items-center justify-between bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">Catalog Sorting</span>
              <div className="w-64">
                <Sorting setSortOption={setSortOption} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {sortedProducts.map(product => (
                <div key={product.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <Pagination
                totalProducts={products.length}
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductLists;