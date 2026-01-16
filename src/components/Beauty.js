import React from 'react';
import Footer from './Footer';

const Beauty = () => {
    return (
        <div className="w-full font-sans bg-gray-50 min-h-screen">
            {/* Header Section with Banner color */}
            <div className="bg-[#14949d]/30 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-4">
                <div className="text-center md:text-left">
                    <p className="text-gray-800 text-lg md:text-xl font-bold tracking-wider uppercase">
                        Beauty & Personal Care
                    </p>
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                    <p>
                        Home / Category / <span className="font-bold text-gray-800">Products</span>
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-5xl mx-auto my-8 p-6 md:p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-center mb-10">
                    <h5 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Beauty & Personal Care Category
                    </h5>
                </div>

                {/* Categories Grid */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {/* Hair Care Item */}
                    <div className="group flex flex-col items-center text-center transition-transform hover:scale-105">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#00a09d] mb-4">
                            <img 
                                src='/images/img32.jpg' 
                                alt='Hair Care' 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="font-bold text-gray-700 group-hover:text-[#00a09d] transition-colors">
                            Hair Care
                        </p>
                    </div>

                    {/* Skin Care Item */}
                    <div className="group flex flex-col items-center text-center transition-transform hover:scale-105">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#00a09d] mb-4">
                            <img 
                                src='/images/img33.jpeg' 
                                alt='Skin Care' 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="font-bold text-gray-700 group-hover:text-[#00a09d] transition-colors">
                            Skin Care
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Beauty;