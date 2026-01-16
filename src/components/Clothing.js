import React from 'react';
import Footer from './Footer';

const Clothing = () => {
    return (
        <div className="w-full bg-gray-50 min-h-screen font-sans">
            {/* Header Section: Title and Breadcrumbs */}
            <div className="bg-teal-500/20 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-4 border-b border-gray-200">
                <div className="text-center md:text-left">
                    <p className="text-gray-800 text-lg md:text-2xl font-bold tracking-wider uppercase">
                        Clothing
                    </p>
                </div>
                <div className="text-gray-600 text-sm md:text-base italic">
                    <p>
                        Home / Category / <span className="font-bold text-teal-600">Products</span>
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto my-10 p-6 md:p-12 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center mb-12">
                    <h5 className="text-2xl md:text-4xl font-extrabold text-gray-800">
                        Clothing Category
                    </h5>
                    <div className="h-1 w-20 bg-teal-500 mx-auto mt-2 rounded-full"></div>
                </div>

                {/* Sub-Categories Container */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    
                    {/* Category Item: Men's Fashion */}
                    <div className="group flex flex-col items-center text-center cursor-pointer">
                        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500 p-1 bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <img 
                                src='/images/img26.jpg' 
                                alt="Men's Fashion" 
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <p className="mt-4 font-bold text-gray-700 text-lg group-hover:text-teal-600 transition-colors">
                            Men's Fashion
                        </p>
                    </div>

                    {/* Category Item: Saree */}
                    <div className="group flex flex-col items-center text-center cursor-pointer">
                        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500 p-1 bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <img 
                                src='/images/img27.jpg' 
                                alt="Saree" 
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <p className="mt-4 font-bold text-gray-700 text-lg group-hover:text-teal-600 transition-colors">
                            Saree
                        </p>
                    </div>

                    {/* Category Item: Kids Wear */}
                    <div className="group flex flex-col items-center text-center cursor-pointer">
                        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500 p-1 bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <img 
                                src='/images/img28.jpg' 
                                alt="Kids Wear" 
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <p className="mt-4 font-bold text-gray-700 text-lg group-hover:text-teal-600 transition-colors">
                            Kids Wear
                        </p>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Clothing;