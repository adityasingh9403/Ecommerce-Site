import React from 'react';
import Footer from './Footer';

const Toys = () => {
    return (
        <div className="w-full bg-gray-50 min-h-screen font-sans">
            {/* Header Section: Title and Breadcrumbs */}
            <div className="bg-[#14949d]/30 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-4 border-b border-gray-200">
                <div className="text-center md:text-left">
                    <p className="text-gray-800 text-xl md:text-2xl font-extrabold tracking-tight uppercase">
                        Toys & Games
                    </p>
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                    <p>
                        Home / Category / <span className="font-bold text-[#00a09d]">Products</span>
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-5xl mx-auto my-10 p-6 md:p-12 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="text-center mb-12">
                    <h5 className="text-2xl md:text-4xl font-black text-gray-800">
                        Toys & Games Category
                    </h5>
                    <div className="h-1.5 w-24 bg-[#00a09d] mx-auto mt-3 rounded-full"></div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 justify-items-center">
                    
                    {/* Item: Action Figures */}
                    <div className="group flex flex-col items-center text-center cursor-pointer max-w-[200px]">
                        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#00a09d] p-1.5 bg-white shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-teal-100">
                            <img 
                                src='/images/img34.jpeg' 
                                alt='Action Figures' 
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <p className="mt-5 font-bold text-gray-700 text-lg md:text-xl group-hover:text-[#00a09d] transition-colors">
                            Action Figures
                        </p>
                    </div>

                    {/* Item: Dolls & Accessories */}
                    <div className="group flex flex-col items-center text-center cursor-pointer max-w-[200px]">
                        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#00a09d] p-1.5 bg-white shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-teal-100">
                            <img 
                                src='/images/img35.jpeg' 
                                alt='Dolls & Accessories' 
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <p className="mt-5 font-bold text-gray-700 text-lg md:text-xl group-hover:text-[#00a09d] transition-colors">
                            Dolls & Accessories
                        </p>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Toys;