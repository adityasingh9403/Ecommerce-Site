import React from 'react';
import Footer from './Footer';
import './ByDefault.css';

const categories = [
    { name: 'Clothing', image: '/images/img4.jpg' },
    { name: 'Electronics', image: '/images/img15.jpeg' },
    { name: 'Home & Kitchen', image: '/images/img5.jpeg' },
    { name: 'Beauty & Personal Care', image: '/images/img6.jpg' },
    { name: 'Toys & Games', image: '/images/img7.jpeg' },
    { name: 'Grocery & Gourmet Food', image: '/images/img8.jpeg' },
    { name: 'Books', image: '/images/img9.jpeg' },
    { name: 'Fitness', image: '/images/img10.jpeg' },
    { name: 'Health & Personal Care', image: '/images/img11.jpeg' },
    { name: 'Stationery', image: '/images/img12.jpeg' },
    { name: 'Mobiles', image: '/images/img13.jpg' },
    { name: 'Women Jewellery', image: '/images/img14.jpg' },
    { name: 'Baby Care', image: '/images/img50.jpg' },
    { name: 'Ayurvedic Products', image: '/images/img51.jpg' },
];

const Category = () => {
    return (
        <div className="category-container">
            <div className="category-header">
                <div className="category-title">
                    <h5 className="category-heading">Categories</h5>
                </div>
                <div className="category-items-container">
                    {categories.map((category, index) => (
                        <div key={index} className="category-item1">
                            <img src={category.image} alt={category.name} />
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Category;