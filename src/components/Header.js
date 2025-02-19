import React from 'react';
import { Link } from 'react-router-dom';
import './ByDefault.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/" className="menu-item"><img src="/images/newlogo22.png" alt="Alpha Platinum" className="logo-icon" /></Link>
          <input type="text" placeholder="Search for products" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="search-bar">
          <Link to="/login" className="menu-item"><button className="loginbutton">Login</button></Link>
          <i className="fas fa-heart icon"></i>
          <i className="fas fa-shopping-cart icon"></i>
        </div>
      </div>
      <div className="navbar-menu">
        <Link to="/category" className="menu-item">See All</Link>
        <div className='line'></div>
        <Link to="/clothing" className="menu-item">Clothing</Link>
        <Link to="/electronics" className="menu-item">Electronics</Link>
        <Link to="/home" className="menu-item">Home & Kitchen</Link>
        <Link to="/beauty" className="menu-item">Beauty & Personal Care</Link>
        <Link to="/toys" className="menu-item">Toys & Games</Link>
        <Link to="/grocery" className="menu-item">Grocery & Gourmet Food</Link>
        <Link to="/books" className="menu-item">Books</Link>
      </div>
    </nav>
  );
};

export default Header;
