import './ByDefault.css';
import React from 'react';

const categories = [
  { name: 'Sheets & Pillowcases', price: '₹2000', image: '/images/img21.jpg' },
];

const Sheets = () => {
  return (
    <section className="sheets-section">
      <div className="sheets-grid">
        {categories.map((category, index) => (
          <div key={index} className="sheets-item">
            <div className="discount-badge">0% OFF</div>
            <img src={category.image} alt={category.name} className="sheets-image" />
            <p className="sheets-name">{category.name}</p>
            <p className="sheets-price">{category.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sheets;
