import React from 'react';
import './ByDefault.css';
import Footer from './Footer';

const categories = [
  { name: 'Poha', actualprice: '₹ 262.50', price: '₹ 262.49', image: '/images/img37.jpg' },
  { name: 'Rava', actualprice: '₹ 262.50', price: '₹ 262.49', image: '/images/img38.jpg' },
  { name: 'Turmeric Powder', actualprice: '₹ 52.50', price: '₹ 52.49', image: '/images/img39.jpg' },
  { name: 'Tide Plus', actualprice: '₹ 157.50', price: '₹ 157.49', image: '/images/img40.jpg' },
  { name: 'Tea', actualprice: '₹ 314.89', price: '₹ 312.90', image: '/images/img41.jpg' },
  { name: 'Salt', actualprice: '₹ 52.50', price: '₹ 52.49', image: '/images/img42.jpg' },
  { name: 'Aata', actualprice: '₹ 625.00', price: '₹ 525.00', image: '/images/img43.jpg' },
  { name: 'Toor Daal', actualprice: '₹ 167.50', price: '₹ 157.50', image: '/images/img44.jpg' },
  { name: 'Rice', actualprice: '₹ 209.95', price: '₹ 208.95', image: '/images/img45.jpg' },
  { name: 'Oil', actualprice: '₹ 115.0', price: '₹ 105.0', image: '/images/img46.jpg' },
  { name: 'Sugar', actualprice: '₹ 25.10', price: '₹ 23.10', image: '/images/img47.jpg' },
];

const Grocery = () => {
  return (

    <div className='terms-container'>
      <div className='terms-header'>
        <div className='terms-title'>
          <p className='title-text'><b>Grocery & Gourmet Food</b></p>
        </div>
        <div className='breadcrumbs'>
          <p className='breadcrumb-text'>Home / Category / <b>Grocery & Gourmet Food</b></p>
        </div>
      </div>

      <div className="sheets-grid">
        {categories.map((category, index) => (
          <div key={index} className="sheets-item">
            <div className="discount-badge">0% OFF</div>
            <img src={category.image} alt={category.name} className="sheets-image" />
            <p className="sheets-name">{category.name}</p>
            <p className="sheets-price"><del>{category.price}</del></p>
            <p className="sheets-price">{category.price}</p>
            <button className="add-to-cart-button">+ Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>

  );
};

export default Grocery;