import React, { useState, useEffect } from "react";
import "./Categories.css";

const Categories = () => {
  const categories = [
    { name: "Clothing", image: "/images/img4.jpg" },
    { name: "Electronics", image: "/images/img15.jpeg" },
    { name: "Home & Kitchen", image: "/images/img5.jpeg" },
    { name: "Beauty & Personal Care", image: "/images/img6.jpg" },
    { name: "Toys & Games", image: "/images/img7.jpeg" },
    { name: "Grocery & Gourmet Food", image: "/images/img8.jpeg" },
    { name: "Books", image: "/images/img9.jpeg" },
    { name: "Fitness", image: "/images/img10.jpeg" },
    { name: "Health & Personal Care", image: "/images/img11.jpeg" },
    { name: "Stationery", image: "/images/img12.jpeg" },
    { name: "Mobiles", image: "/images/img13.jpg" },
    { name: "Women Jewellery", image: "/images/img14.jpg" },
    { name: "Baby Care", image: "/images/img50.jpg" },
    { name: "Ayurvedic Products", image: "/images/img51.jpg" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(7);

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width > 1200) setVisibleItems(7);
      else if (width > 992) setVisibleItems(5);
      else if (width > 768) setVisibleItems(3);
      else setVisibleItems(1);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const showNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const showPrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNext();
    }, 3000); 

    return () => clearInterval(interval);
  }, []); 

  const visibleCategories = categories
    .slice(startIndex, startIndex + visibleItems)
    .concat(
      categories.slice(0, Math.max(0, startIndex + visibleItems - categories.length))
    );

  return (
    <section className="product-list-container">
      <h2 className="product-list-title">Category</h2>
      <div className="product-list-slider1">
        <button onClick={showPrevious} className="slider-arrow1 left-arrow">
          &lt;
        </button>
        <div className="category-items-container">
          {visibleCategories.slice(0, visibleItems).map((category, index) => (
            <div key={index} className="categoryitem1">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <button onClick={showNext} className="slider-arrow1 right-arrow">
          &gt;
        </button>
      </div>
      <div className="dots-container">
        {categories.map((_, index) => (
          <span
            key={index}
            className={`dot ${Math.floor(startIndex % categories.length) === index ? "active" : ""
              }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Categories;