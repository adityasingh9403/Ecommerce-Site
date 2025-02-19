import React from 'react';
import { Link } from 'react-router-dom';
import './ByDefault.css';

const ProductCard = ({ product }) => {
  const { id, name, price, discount, image } = product;

  return (
    <div>
      <div className="product-card-v2 ">
        <img src={product.thumbnail} alt={product.title} style={{ height: '100px' }} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Total: ${product.total.toFixed(2)}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Discounted Total: ${product.discountedTotal.toFixed(2)}</p>
        <Link to={`/product/${id}`} className="view-details">
          View Details
        </Link>

      </div>
    </div>
  );
};

export default ProductCard;
