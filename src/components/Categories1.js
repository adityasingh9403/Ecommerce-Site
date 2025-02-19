import React from 'react';
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './ByDefault.css';

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
        <div className='imgslider1'>
            <section className="image-slider1">
                <div class="left1">
                    <ArrowBackIosIcon onClick={prevSlide} />
                </div>
                <div class="right1">
                    <ArrowForwardIosIcon onClick={nextSlide} />
                </div>
                {sliderImages.map((currentSlide, ind) => {
                    return (
                        <div
                            className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                            key={ind}
                        >
                            {ind === activeImageNum && <img src={currentSlide.image} className="images1" />}
                            <p>{currentSlide.name} </p>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Categories1;