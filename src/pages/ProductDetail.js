import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/carts');
        const data = await response.json();

        const allProducts = data.carts.flatMap(cart => cart.products);
        const selectedProduct = allProducts.find(item => item.id === parseInt(id));

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-detail-container">
      <img src={product.thumbnail || 'placeholder.jpg'} alt={product.title} />
      <h1>{product.title}</h1>
      <p>Price: ₹{product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Quantity: {product.quantity}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;