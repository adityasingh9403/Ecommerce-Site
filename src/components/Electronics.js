import React from 'react';
import Footer from './Footer';
import './ByDefault.css';

const Electronics = () => {
    return (
        <div className='terms-container'>
            <div className='terms-header'>
                <div className='terms-title'>
                    <p className='title-next'><b>Electronics</b></p>
                </div>
                <div className='breadcrumbs'>
                    <p className='breadcrumb-next'>Home / Category / <b>Products</b></p>
                </div>
            </div>
            <div className='terms-content'>
                <div className='terms-section'>
                    <h5 className='content-title'>Electronics Category</h5>
                    <div className="categories-container">
                        <div className="categoryitem">
                            <img src='/images/img29.jpeg' alt='img' />
                            <p>Computers & Accessories</p>
                        </div>
                        <div className="categoryitem">
                            <img src='/images/img30.jpeg' alt='img' />
                            <p>TV & Video</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Electronics;