import React from 'react';
import Footer from './Footer';
import './ByDefault.css';

const Clothing = () => {
    return (
        <div className='terms-container'>
            <div className='terms-header'>
                <div className='terms-title'>
                    <p className='title-text'><b>Clothing</b></p>
                </div>
                <div className='breadcrumbs'>
                    <p className='breadcrumb-text'>Home / Category / <b>Products</b></p>
                </div>
            </div>
            <div className='terms-content'>
                <div className='terms-section'>
                    <h5 className='content-title'>Clothing Category</h5>
                    <div className="categories-container">
                        <div className="categoryitem">
                            <img src='/images/img26.jpg' alt='img' />
                            <p>Men\'s Fashion</p>
                        </div>
                        <div className="categoryitem">
                            <img src='/images/img27.jpg' alt='img' />
                            <p>Saree</p>
                        </div>
                        <div className="categoryitem">
                            <img src='/images/img28.jpg' alt='img' />
                            <p>Kids Wear</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Clothing;