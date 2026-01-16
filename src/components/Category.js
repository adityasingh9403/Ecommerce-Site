import React from 'react';
import Footer from './Footer';

const categories = [
    { name: 'Clothing', image: '/images/img4.jpg' },
    { name: 'Electronics', image: '/images/img15.jpeg' },
    { name: 'Home & Kitchen', image: '/images/img5.jpeg' },
    { name: 'Beauty & Personal Care', image: '/images/img6.jpg' },
    { name: 'Toys & Games', image: '/images/img7.jpeg' },
    { name: 'Grocery & Gourmet Food', image: '/images/img8.jpeg' },
    { name: 'Books', image: '/images/img9.jpeg' },
    { name: 'Fitness', image: '/images/img10.jpeg' },
    { name: 'Health & Personal Care', image: '/images/img11.jpeg' },
    { name: 'Stationery', image: '/images/img12.jpeg' },
    { name: 'Mobiles', image: '/images/img13.jpg' },
    { name: 'Women Jewellery', image: '/images/img14.jpg' },
    { name: 'Baby Care', image: '/images/img50.jpg' },
    { name: 'Ayurvedic Products', image: '/images/img51.jpg' },
];

const Category = () => {
    return (
        <div className="w-full bg-gray-50 min-h-screen font-sans">
            {/* Header Section */}
            <div className="bg-teal-500/20 py-10 md:py-16 flex flex-col items-center justify-center border-b border-gray-200">
                <div className="mb-4">
                    <h5 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wide">
                        Categories
                    </h5>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                    Home / <span className="font-bold text-teal-600">Categories</span>
                </p>
            </div>

            {/* Categories Grid Container */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 md:gap-8">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                        >
                            {/* Circular Image Wrapper */}
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-teal-500 p-1 bg-white mb-3 group-hover:border-teal-600 transition-colors">
                                <img 
                                    src={category.image} 
                                    alt={category.name} 
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            
                            {/* Category Name */}
                            <p className="text-xs md:text-sm font-bold text-gray-700 text-center group-hover:text-teal-600 transition-colors leading-tight">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Category;