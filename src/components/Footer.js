import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import './ByDefault.css';
import { Link } from 'react-router-dom';
import React, { useState } from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
  
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-container">
          <img src='/images/newlogo22.png' className="footer-logo" alt="logo" />
        </div>
        <div className="footer-links-section">
          <h4 className="heading">Get to Know Us</h4>
          <div className="footer-links-column">
            <ul className="footer-links">
              <Link to="/" className="footer-link"><button className="footer-link">Home</button></Link>
              <Link to="/productlists" className="footer-link"><button className="footer-link">Products</button></Link>
              <Link to="/register" className="footer-link"><button className="footer-link">Register</button></Link>
              <Link to="/contact" className="footer-link"><button className="footer-link">Contact Us</button></Link>
            </ul>
          </div>
          <div className="footer-links-column">
            <ul className="footer-links">
              <Link to="/category" className="footer-link"><button className="footer-link">Category</button></Link>
              <Link to="/login" className="footer-link"><button className="footer-link">Login</button></Link>
              <Link to="/about" className="footer-link"><button className="footer-link">About Us</button></Link>
              <Link to="/seller" className="footer-link"><button className="footer-link">Sellers</button></Link>
            </ul>
          </div>
        </div>
        <div className="footer-connect-section">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <a className="footer-link" href="https://www.facebook.com/"><FaFacebook /></a>
            <a className="footer-link" href="https://x.com/"><FaTwitter /></a>
            <a className="footer-link" href="https://www.instagram.com/"><FaInstagram /></a>
            <a className="footer-link" href="https://www.youtube.com/"><FaYoutube /></a>
          </div>
          <div className="download-buttons">
            <img src="/images/img23.png" alt="App Store" className="download-image" />
            <img src="/images/img24.png" alt="Google Play" className="download-image" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-text">Copyright © 2024, All Rights Reserved Alpha Platinum Private Limited</p>
        <div className="footer-links-bottom">
          <Link to="/" className="footer-link"><button className="footer-link">Home</button></Link>
          <Link to="/terms" className="footer-link"><button className="footer-link">Terms & Condition</button></Link>
          <Link to="/privacy" className="footer-link"><button className="footer-link">Privacy Policy</button></Link>
          <Link to="/about" className="footer-link"><button className="footer-link">About Us</button></Link>
          <Link to="/contact" className="footer-link"><button className="footer-link">Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
