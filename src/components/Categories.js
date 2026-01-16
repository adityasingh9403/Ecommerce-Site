import React, { useState, useEffect } from "react";

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
      else setVisibleItems(2); // Mobile par kam se kam 2 dikhayenge
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
  }, [startIndex]); // startIndex dependency zaroori hai automatic smooth rotation ke liye

  const visibleCategories = categories
    .slice(startIndex, startIndex + visibleItems)
    .concat(
      categories.slice(0, Math.max(0, startIndex + visibleItems - categories.length))
    );

  return (
    <section className="py-8 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">Category</h2>
      
      <div className="relative flex items-center justify-center group">
        {/* Left Arrow */}
        <button 
          onClick={showPrevious} 
          className="absolute left-0 md:left-4 z-10 bg-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-600 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          &lt;
        </button>

        {/* Categories Container */}
        <div className="flex gap-4 md:gap-6 w-full max-w-7xl justify-center px-2 md:px-12 overflow-hidden">
          {visibleCategories.slice(0, visibleItems).map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center min-w-[120px] transition-transform duration-500 ease-in-out transform hover:scale-105"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-teal-500 p-1 bg-white shadow-sm">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-semibold text-gray-700 max-w-[100px] md:max-w-none">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={showNext} 
          className="absolute right-0 md:right-4 z-10 bg-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-600 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          &gt;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {categories.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              startIndex % categories.length === index ? "bg-teal-500 w-4" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Categories;