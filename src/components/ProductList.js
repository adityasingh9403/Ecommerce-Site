import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const showNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 6 < products.length ? prevIndex + 6 : 0
    );
  };

  const showPrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 6 >= 0 ? prevIndex - 6 : products.length - 6
    );
  };

  const visibleProducts = [
    ...products.slice(startIndex, startIndex + 6),
    ...products.slice(0, Math.max(0, startIndex + 6 - products.length)),
  ];

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Product List</h1>
      <div className="product-list-slider">
        <button onClick={showPrevious} className="slider-arrow2 left-arrow1">
          &lt;
        </button>
        <div className="product-list-items">
          {visibleProducts.map((product) => (
            <div key={product.id} className="product-card1">
              <div className="discount-badge">0% OFF</div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
              <p className="product-name">{product.title}</p>
              <p className="product-price">{`₹${product.price}`}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
        <button onClick={showNext} className="slider-arrow2 right-arrow1">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductList;
