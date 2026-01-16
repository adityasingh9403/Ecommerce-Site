import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const NewProductSpecial = () => {
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/carts');
                if (!response.ok) throw new Error('Failed to fetch carts');
                const data = await response.json();
                setCarts(data.carts || []);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchCarts();
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
        </div>
    );

    if (error) return (
        <div className="text-center py-20">
            <p className="text-red-500 font-bold text-xl uppercase tracking-widest">Error: {error}</p>
        </div>
    );

    const totalPages = carts.length;
    const handleNext = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
    const handlePrev = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };
    const currentCart = carts[currentPage - 1];

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-3xl md:text-5xl font-black text-gray-800 text-center mb-10">
                    New Product Specials
                </h1>

                {currentCart && (
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-10">
                        <div className="bg-teal-500 py-4 px-8">
                            <h2 className="text-white font-bold text-xl uppercase tracking-wider">
                                Cart ID: {currentCart.id}
                            </h2>
                        </div>

                        <div className="p-6 md:p-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {Array.isArray(currentCart.products) && currentCart.products.length > 0 ? (
                                    currentCart.products.map((product) => (
                                        <div key={product.id} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                            <div className="relative overflow-hidden rounded-xl bg-white p-4 mb-4">
                                                <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                                                    -{product.discountPercentage}%
                                                </span>
                                                <img
                                                    src={product.thumbnail || 'https://via.placeholder.com/150'}
                                                    alt={product.title}
                                                    className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>

                                            <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{product.title}</h3>
                                            
                                            <div className="space-y-1 mb-6 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Price:</span>
                                                    <span className="font-bold text-teal-600">${product.price.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Qty:</span>
                                                    <span>{product.quantity}</span>
                                                </div>
                                                <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                                                    <span className="font-bold text-gray-700">Total:</span>
                                                    <span className="font-black text-gray-900">${product.discountedTotal.toFixed(2)}</span>
                                                </div>
                                            </div>

                                            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-md hover:shadow-teal-200">
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p className="col-span-full text-center py-10 text-gray-500 italic">No products available in this cart.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                    <button 
                        onClick={handlePrev} 
                        disabled={currentPage === 1}
                        className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-teal-500 text-teal-600 font-bold rounded-xl hover:bg-teal-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                    >
                        &larr; Previous
                    </button>
                    
                    <span className="bg-teal-100 text-teal-700 px-6 py-2 rounded-full font-bold text-sm">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button 
                        onClick={handleNext} 
                        disabled={currentPage === totalPages}
                        className="w-full sm:w-auto px-8 py-3 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md"
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NewProductSpecial;