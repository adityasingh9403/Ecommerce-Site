import React, { useState } from 'react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Categories1 = () => {
    const sliderImages = [
        { name: 'Grocery & Gourmet Food', image: '/images/img8.jpeg' },
        { name: 'Books', image: '/images/img9.jpeg' },
        { name: 'Fitness', image: '/images/img10.jpeg' },
        { name: 'Health & Personal Care', image: '/images/img11.jpeg' },
        { name: 'Stationery', image: '/images/img12.jpeg' },
        { name: 'Mobiles', image: '/images/img13.jpg' },
        { name: 'Women Jewellery', image: '/images/img14.jpg' },
    ];

    const [activeImageNum, setCurrent] = useState(0);
    const length = sliderImages.length;

    const nextSlide = () => {
        setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
    };

    const prevSlide = () => {
        setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
    };

    if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
        return null;
    }

    return (
        <div className="w-full py-10 bg-gray-50">
            {/* Slider Container */}
            <section className="relative flex items-center justify-center h-[250px] md:h-[400px] overflow-hidden max-w-5xl mx-auto">
                
                {/* Left Arrow */}
                <div className="absolute left-4 z-10 cursor-pointer text-teal-600 hover:text-teal-800 transition-colors select-none">
                    <ArrowBackIosIcon 
                        className="!text-3xl md:!text-5xl" 
                        onClick={prevSlide} 
                    />
                </div>

                {/* Right Arrow */}
                <div className="absolute right-4 z-10 cursor-pointer text-teal-600 hover:text-teal-800 transition-colors select-none">
                    <ArrowForwardIosIcon 
                        className="!text-3xl md:!text-5xl" 
                        onClick={nextSlide} 
                    />
                </div>

                {/* Slides */}
                {sliderImages.map((currentSlide, ind) => {
                    return (
                        <div
                            className={`transition-opacity duration-500 ease-in-out flex flex-col items-center ${
                                ind === activeImageNum ? "opacity-100 scale-100" : "opacity-0 absolute scale-95"
                            }`}
                            key={ind}
                        >
                            {ind === activeImageNum && (
                                <>
                                    <div className="w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg mb-4">
                                        <img 
                                            src={currentSlide.image} 
                                            alt={currentSlide.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-lg md:text-2xl font-bold text-gray-800 text-center px-4 uppercase tracking-wide">
                                        {currentSlide.name}
                                    </p>
                                </>
                            )}
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Categories1;