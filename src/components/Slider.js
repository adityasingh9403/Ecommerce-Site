import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
   const sliderImages = [
      { url: "/images/img1.png" },
      { url: "/images/img2.jpg" },
      { url: "/images/img3.jpg" },
   ];

   const [activeImageNum, setActiveImageNum] = useState(0);
   const length = sliderImages.length;

   const nextSlide = () => {
      setActiveImageNum((prev) => (prev === length - 1 ? 0 : prev + 1));
   };

   const prevSlide = () => {
      setActiveImageNum((prev) => (prev === 0 ? length - 1 : prev - 1));
   };

   useEffect(() => {
      const interval = setInterval(() => {
         nextSlide();
      }, 5000); // 5 seconds for better readability
      return () => clearInterval(interval);
   }, [activeImageNum]);

   if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
   }

   return (
      <div className="relative w-full overflow-hidden bg-gray-200 group">
         {/* Main Slider Container with Dynamic Aspect Ratio */}
         <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Left Arrow - Enhanced for Mobile Touch */}
            <button 
               aria-label="Previous Slide"
               className="absolute left-2 md:left-8 z-30 cursor-pointer text-white/80 hover:text-white bg-black/10 hover:bg-black/40 p-3 md:p-5 rounded-full transition-all opacity-100 md:opacity-0 group-hover:opacity-100 backdrop-blur-sm active:scale-90"
               onClick={prevSlide}
            >
               <ArrowBackIosIcon className="!text-lg md:!text-3xl translate-x-1" />
            </button>

            {/* Right Arrow - Enhanced for Mobile Touch */}
            <button 
               aria-label="Next Slide"
               className="absolute right-2 md:right-8 z-30 cursor-pointer text-white/80 hover:text-white bg-black/10 hover:bg-black/40 p-3 md:p-5 rounded-full transition-all opacity-100 md:opacity-0 group-hover:opacity-100 backdrop-blur-sm active:scale-90"
               onClick={nextSlide}
            >
               <ArrowForwardIosIcon className="!text-lg md:!text-3xl" />
            </button>

            {/* Images Loop with Smooth Transitions */}
            {sliderImages.map((currentSlide, ind) => {
               return (
                  <div
                     key={ind}
                     className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        ind === activeImageNum ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                     } transition-transform duration-[2000ms]`}
                  >
                     {ind === activeImageNum && (
                        <img 
                           src={currentSlide.url} 
                           className="w-full h-full object-cover sm:object-center lg:object-fill" 
                           alt={`SK Prime Mart Banner ${ind + 1}`} 
                        />
                     )}
                     {/* Gradient Overlay for Text Readability (if you add text later) */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
               );
            })}

            {/* Dots Indicator - Responsive Sizes */}
            <div className="absolute bottom-3 md:bottom-6 z-40 flex gap-1.5 md:gap-3">
               {sliderImages.map((_, i) => (
                  <button 
                     key={i}
                     onClick={() => setActiveImageNum(i)}
                     aria-label={`Go to slide ${i + 1}`}
                     className={`h-1.5 md:h-2.5 rounded-full transition-all duration-500 cursor-pointer shadow-md ${
                        i === activeImageNum 
                        ? "bg-teal-500 w-6 md:w-12" 
                        : "bg-white/60 w-1.5 md:w-2.5 hover:bg-white"
                     }`}
                  />
               ))}
            </div>
         </section>
      </div>
   );
};

export default Slider;