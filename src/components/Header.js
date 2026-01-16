import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col w-full bg-white shadow-md sticky top-0 z-[100] font-sans">
      {/* 1. Main Navbar Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 py-3 gap-4">
        
        {/* Logo and Mobile Header */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-6">
          <Link to="/" className="shrink-0 transition-all duration-300 active:scale-95 group">
            <div className="bg-white p-1 rounded-full shadow-sm border border-gray-50 group-hover:shadow-teal-100 transition-all">
              <img 
                src="/images/newlogo23.jpg" 
                alt="SK Prime Mart" 
                className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain rounded-full" 
              />
            </div>
          </Link>
          
          <div className="flex items-center gap-4 lg:hidden">
            {/* Mobile Icons (Cart shortcut) */}
            <div className="relative text-teal-600 mr-2">
               <i className="fas fa-shopping-cart text-xl"></i>
               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>
            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-teal-600 p-2 focus:outline-none bg-teal-50 rounded-lg"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* 2. Search Bar - Optimized for center alignment */}
        <div className="relative flex items-center w-full lg:max-w-2xl group order-last lg:order-none">
          <input 
            type="text" 
            placeholder="Search from SK Prime Mart..." 
            className="w-full py-3 px-6 pr-14 border-2 border-gray-100 rounded-2xl outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300 bg-gray-50/50 focus:bg-white text-sm md:text-base"
          />
          <button className="absolute right-2 p-2.5 bg-teal-500 hover:bg-teal-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-teal-500/20 active:scale-90">
            <i className="fas fa-search text-base"></i>
          </button>
        </div>

        {/* 3. Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/login" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all">
               <i className="fas fa-user"></i>
            </div>
            <span className="font-bold text-gray-700">Login</span>
          </Link>

          <div className="flex gap-6 text-gray-700 text-xl items-center border-l pl-8 border-gray-100">
            <div className="relative cursor-pointer hover:text-red-500 transition-all transform hover:scale-110">
               <i className="fas fa-heart" title="Wishlist"></i>
            </div>
            <div className="relative cursor-pointer hover:text-teal-600 transition-all transform hover:scale-110">
              <i className="fas fa-shopping-cart" title="Cart"></i>
              <span className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-sm">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Navigation Menu */}
      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:flex bg-teal-600 flex-wrap justify-center items-center py-2 md:py-0 overflow-x-auto whitespace-nowrap scrollbar-hide
      `}>
        {[
          { name: 'Home', path: '/' },
          { name: 'Clothing', path: '/clothing' },
          { name: 'Electronics', path: '/electronics' },
          { name: 'Home & Kitchen', path: '/home' },
          { name: 'Beauty', path: '/beauty' },
          { name: 'Toys', path: '/toys' },
          { name: 'Grocery', path: '/grocery' },
          { name: 'Books', path: '/books' },
        ].map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className="text-white/90 px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-teal-700 hover:text-white transition-all relative group"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;