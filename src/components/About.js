import React from 'react';
import Footer from './Footer';

const About = () => {
    return (
        <div className="w-full font-sans bg-gray-50 min-h-screen">
            {/* Header Section (Banner) */}
            <div className="bg-[#14949d]/30 flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-12">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-800 text-xl md:text-2xl font-bold tracking-wider uppercase">
                        ABOUT US
                    </p>
                </div>
                <div className="text-gray-700 font-medium">
                    <p className="text-base">
                        Home / <span className="font-bold">About Us</span>
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto my-10 p-8 md:p-12 bg-white rounded-lg shadow-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        About Us
                    </h1>
                </div>
                
                <div className="space-y-6">
                    <p className="text-lg font-semibold text-gray-700 border-b-2 border-teal-500 inline-block">
                        About Us
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                         SK Prime Mart is an online store and wholesale dealer in India dealing in all Home Appliances. 
                        With over <span className="text-teal-600 font-bold">10,000 products</span> and over <span className="text-teal-600 font-bold">1000 brands</span> in our catalogue, you will find everything you are looking for.
                        Right from TVs, Washing Machines, Refrigerators, ACs, Air Coolers, Audio Devices (Headphones/Speakers), Gas Stoves, Electric Stoves, etc.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices.
                        We will deliver within <span className="font-bold text-gray-800">24 hours</span>. In case of any queries or further details, feel free to write to us at <a href="mailto:support@skprimemart.in" className="text-teal-500 hover:underline">support@skprimemart.in</a>.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;