import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151414] text-white pt-12 pb-6 px-4 md:px-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        
        {/* Logo Section */}
<div className="flex flex-col items-center md:items-start max-w-xs md:max-w-sm">
  <div className="w-40 md:w-48 lg:w-56 transition-all duration-300">
    <img 
      src='/images/newlogo23.jpg' 
      className="w-full h-auto object-contain rounded-lg shadow-sm" 
      alt="SK Prime Mart Logo" 
      loading="lazy"
    />
  </div>
  <p className="mt-4 text-gray-400 text-sm md:text-base text-center md:text-left leading-relaxed font-medium">
    Your premium destination for <span className="text-teal-500">quality products</span> at wholesale prices.
  </p>
</div>

        {/* Links Column 1 */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold mb-6 border-b-2 border-teal-500 inline-block pb-1">Get to Know Us</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Home</Link></li>
            <li><Link to="/productlists" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Products</Link></li>
            <li><Link to="/register" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Register</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Contact Us</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold mb-6 border-b-2 border-teal-500 inline-block pb-1">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/category" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Category</Link></li>
            <li><Link to="/login" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Login</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">About Us</Link></li>
            <li><Link to="/seller" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Sellers</Link></li>
          </ul>
        </div>

        {/* Social & Download Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-lg font-bold mb-6 border-b-2 border-teal-500 inline-block pb-1">Connect with Us</h4>
          <div className="flex gap-4 mb-6 text-2xl">
            <a href="https://www.facebook.com/" className="hover:text-teal-500 transition-colors"><FaFacebook /></a>
            <a href="https://x.com/" className="hover:text-teal-500 transition-colors"><FaTwitter /></a>
            <a href="https://www.instagram.com/" className="hover:text-teal-500 transition-colors"><FaInstagram /></a>
            <a href="https://www.youtube.com/" className="hover:text-teal-500 transition-colors"><FaYoutube /></a>
          </div>
          <div className="flex gap-3">
            <img src="/images/img23.png" alt="App Store" className="h-10 hover:scale-105 transition-transform cursor-pointer" />
            <img src="/images/img24.png" alt="Google Play" className="h-10 hover:scale-105 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>

      <hr className="border-gray-800 mb-8" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <p className="text-gray-500 text-xs text-center">
          Copyright © 2024, All Rights Reserved SK Prime Group Private Limited
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link to="/" className="text-gray-500 hover:text-white text-xs transition-colors">Home</Link>
          <Link to="/terms" className="text-gray-500 hover:text-white text-xs transition-colors">Terms & Condition</Link>
          <Link to="/privacy" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
          <Link to="/about" className="text-gray-500 hover:text-white text-xs transition-colors">About Us</Link>
          <Link to="/contact" className="text-gray-500 hover:text-white text-xs transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;