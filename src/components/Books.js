import React from 'react';
import Footer from './Footer';
import './ByDefault.css';

const Books = () => {
    return (
        <div className='terms-container'>
            <div className='terms-header'>
                <div className='terms-title'>
                    <p className='title-text'><b>BOOKS</b></p>
                </div>
                <div className='breadcrumbs'>
                    <p className='breadcrumb-text'>Home / Category / <b>Products</b></p>
                </div>
            </div>
            <div className='terms-content'>
                <div className='terms-section'>
                    <h5 className='content-title'>Books Category</h5>
                    <div className="categories-container">
                        <div className="categoryitem">
                            <img src='/images/img36.jpeg' alt='img' />
                            <p>Fiction</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Books;