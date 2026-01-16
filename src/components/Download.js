import React from "react";

const Download = () => {
  return (
    <div className="w-full bg-gray-100 py-10 md:py-16 px-4">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        
        {/* App Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/images/img22.png" 
            alt="App Logo" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left flex-grow">
          <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 leading-tight">
            Download App Now!
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Use code <span className="font-bold text-teal-600">WELCOMEMMT</span> and get <span className="font-bold text-gray-900">FLAT 12% OFF*</span> on your first domestic flight booking
          </p>
        </div>

        {/* Download Buttons (App Store & Play Store) */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-center">
          <img 
            src="/images/img23.png" 
            alt="App Store" 
            className="h-10 md:h-12 cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-sm rounded-lg" 
          />
          <img 
            src="/images/img24.png" 
            alt="Google Play" 
            className="h-10 md:h-12 cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-sm rounded-lg" 
          />
        </div>

        {/* QR Code Section */}
        <div className="hidden lg:block border-l pl-8 border-gray-200">
          <img 
            src="/images/img25.jpg" 
            alt="QR Code" 
            className="h-24 w-24 object-contain rounded-xl border border-gray-100 p-1 bg-white shadow-inner" 
          />
          <p className="text-[10px] text-center text-gray-400 mt-2 font-medium">SCAN TO DOWNLOAD</p>
        </div>
      </div>
    </div>
  );
};

export default Download;