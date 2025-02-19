import React from 'react';
import { Link } from 'react-router-dom';
import './ByDefault.css';

const categories = [
  { name: 'Clothing', price: '₹5248.', image: '/images/img16.jpg' },
  { name: 'Electronics', price: '₹892', image: '/images/img17.jpg' },
  { name: 'Home & Kitchen', price: '₹892', image: '/images/img18.jpg' },
  { name: 'Beauty & Personally Care', price: '₹890', image: '/images/img19.jpg' },
  { name: 'Toys & Games', price: '₹585', image: '/images/img20.jpg' },
];

const Dress = () => {
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
        <div className='foot'>
          <p className="newproduct"><b>Offer</b></p>
          <p className="newproduct1">Special Offer</p>
          <Link to="/newproductspecial" className="footer-link"><button className="footerlink">View More</button></Link>
        </div>
      </div>
    </section>
  );
};

export default Dress;