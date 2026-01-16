import React from "react";
import { FaShippingFast, FaUndo, FaPhoneAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    { icon: <FaShippingFast />, title: "Fast Shipping", description: "Fast Shipping at your doorstep." },
    { icon: <FaUndo />, title: "Free Returns", description: "Free return if products are damaged." },
    { icon: <FaPhoneAlt />, title: "Support 24/7", description: "24/7 and 365 days support is available." },
    { icon: "→", title: "Seller Login", description: "Join our marketplace today." },
  ];

  return (
    <div className="bg-[#49a6a2] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center text-white group cursor-pointer transition-all duration-300"
          >
            {/* Icon Circle */}
            <div className="text-4xl mb-4 bg-white/10 p-5 rounded-full group-hover:bg-white group-hover:text-[#49a6a2] transition-all duration-300 shadow-sm">
              {feature.icon}
            </div>
            
            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-sm text-teal-50 opacity-90 leading-relaxed max-w-[200px] mx-auto">
                  {feature.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;