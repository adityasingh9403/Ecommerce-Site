import React, { useState, useEffect } from 'react';
import './ByDefault.css';
import Footer from './Footer';

const NewProductSpecial = () => {
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/carts');
                if (!response.ok) {
                    throw new Error('Failed to fetch carts');
                }
                const data = await response.json();
                setCarts(data.carts || []);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCarts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const totalPages = carts.length;

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const currentCart = carts[currentPage - 1]; 

    return (
        <div>
            <h1>New Product Specials</h1>
            {currentCart && (
                <div className="cart">
                    <h2>Cart ID: {currentCart.id}</h2>
                    <div className="products">
                        {Array.isArray(currentCart.products) && currentCart.products.length > 0 ? (
                            currentCart.products.map((product) => (
                                <div key={product.id} className="product">
                                    <img
                                        src={product.thumbnail || 'https://via.placeholder.com/100'}
                                        alt={product.title}
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <h3>{product.title}</h3>
                                    <p>Price: ${product.price.toFixed(2)}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <p>Total: ${product.total.toFixed(2)}</p>
                                    <p>Discount: {product.discountPercentage}%</p>
                                    <p>Discounted Total: ${product.discountedTotal.toFixed(2)}</p>
                                    
                                    <button className="add-to-cart-button">Add to Cart</button>
                                </div>
                            ))
                        ) : (
                            <p>No products available in this cart.</p>
                        )}
                    </div>
                </div>
            )}
            <div className="pagination">
                <button onClick={handlePrev} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default NewProductSpecial;
