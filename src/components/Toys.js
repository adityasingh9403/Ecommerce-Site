import React from 'react';
import Footer from './Footer';
import './ByDefault.css';

const Toys = () => {
    return (
        <div className='terms-container'>
            <div className='terms-header'>
                <div className='terms-title'>
                    <p className='title-text'><b>TOYS & GAMES</b></p>
                </div>
                <div className='breadcrumbs'>
                    <p className='breadcrumb-text'>Home / Category / <b>Products</b></p>
                </div>
            </div>
            <div className='terms-content'>
                <div className='terms-section'>
                    <h5 className='content-title'>Toys & Games Category</h5>
                    <div className="categories-container">
                        <div className="categoryitem">
                            <img src='/images/img34.jpeg' alt='img' />
                            <p>Action Figures</p>
                        </div>
                        <div className="categoryitem">
                            <img src='/images/img35.jpeg' alt='img' />
                            <p>Dolls & Accessories</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Toys;