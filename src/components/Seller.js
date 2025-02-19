import './ByDefault.css';
import React from 'react';
import Footer from './Footer';

const categories = [
    { name: 'Raj Babbar', storename : 'Raj Store', image: '/images/img48.jpeg' },
    { name: 'Sonam Goswami', storename : 'Sonam Store', image: '/images/newlogo22.png' },
    { name: 'Rohit Ji', storename : 'Rohit Store', image: '/images/img34.jpeg' },
    { name: 'Ajay Sharma', storename : 'Ajay Store', image: '/images/img49.jpg' },
  ];

const Seller = () => {
    return (
        <div>
    <section className="sheets-section">
    <div className="sheets-grid">
      {categories.map((category, index) => (
        <div key={index} className="sheets-item">
          <img src={category.image} alt={category.name} className="sheets-image" />
          <p className="sheets-name">{category.name}</p>
          <p className="sheets-price">{category.storename}</p>
          <p className="sheets-price">{category.price}</p>
          <button className="add-to-cart-button">View Products</button>
        </div>
      ))}
    </div>
    
  </section>
  <Footer />
  </div>
    );
};

export default Seller;