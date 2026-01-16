import React from 'react';
import Footer from './Footer';

const categories = [
    { name: 'Raj Babbar', storename : 'Raj Store', image: '/images/img48.jpeg' },
    { name: 'Sonam Goswami', storename : 'Sonam Store', image: '/images/newlogo23.jpg' },
    { name: 'Rohit Ji', storename : 'Rohit Store', image: '/images/img34.jpeg' },
    { name: 'Ajay Sharma', storename : 'Ajay Store', image: '/images/img49.jpg' },
  ];

const Seller = () => {
    return (
        <div className="w-full bg-gray-50 min-h-screen font-sans">
            {/* Header Section */}
            <div className="bg-[#14949d]/30 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-4 border-b border-gray-200">
                <div className="text-center md:text-left">
                    <p className="text-gray-800 text-xl md:text-2xl font-extrabold tracking-tight uppercase">
                        Our Trusted Sellers
                    </p>
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                    <p>
                        Home / <span className="font-bold text-[#00a09d]">Sellers</span>
                    </p>
                </div>
            </div>

            {/* Sellers Grid */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
                        >
                            {/* Profile/Store Image */}
                            <div className="relative mb-6">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-teal-500/20 group-hover:border-teal-500 transition-colors duration-300 shadow-md">
                                    <img 
                                        src={category.image} 
                                        alt={category.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                    />
                                </div>
                                {/* Verified Badge */}
                                <div className="absolute -bottom-2 -right-2 bg-teal-500 text-white p-1.5 rounded-full shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="space-y-1 mb-6">
                                <h3 className="text-xl font-black text-gray-800 group-hover:text-teal-600 transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-teal-600 font-bold text-sm uppercase tracking-widest">
                                    {category.storename}
                                </p>
                            </div>

                            {/* Action Button */}
                            <button className="mt-auto w-full bg-gray-100 hover:bg-teal-500 text-gray-700 hover:text-white font-black py-3 rounded-2xl transition-all duration-300 shadow-sm active:scale-95 border border-gray-200 hover:border-teal-500">
                                View Products
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default Seller;