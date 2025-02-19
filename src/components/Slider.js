import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./ByDefault.css";

const Slider = () => {
   const sliderImages = [
      {
         url: "/images/img1.png",
      },
      {
         url: "/images/img2.jpg",
      },
      {
         url: "/images/img3.jpg",
      },
   ];

   const [activeImageNum, setActiveImageNum] = useState(0);
   const length = sliderImages.length;

   // Function to handle next slide
   const nextSlide = () => {
      setActiveImageNum((prev) => (prev === length - 1 ? 0 : prev + 1));
   };

   // Function to handle previous slide
   const prevSlide = () => {
      setActiveImageNum((prev) => (prev === 0 ? length - 1 : prev - 1));
   };

   // Auto-slide every 4 seconds
   useEffect(() => {
      const interval = setInterval(() => {
         nextSlide();
      }, 4000); // 4 seconds
      return () => clearInterval(interval);
   }, [activeImageNum]);

   // Return null if no images are provided
   if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
   }

   return (
      <div className="imgslider">
         <section className="image-slider">
            {/* Left Arrow */}
            <div className="left" onClick={prevSlide}>
               <ArrowBackIosIcon />
            </div>

            {/* Slider Images */}
            {sliderImages.map((currentSlide, ind) => {
               return (
                  <div
                     className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                     key={ind}
                  >
                     {ind === activeImageNum && <img src={currentSlide.url} className="images" alt="slider" />}
                  </div>
               );
            })}

            <div className="right" onClick={nextSlide}>
               <ArrowForwardIosIcon />
            </div>
         </section>
      </div>
   );
};

export default Slider;
