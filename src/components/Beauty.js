import React from 'react';
import Footer from './Footer';
import './ByDefault.css';

const Beauty = () => {
    return (
        <div className='terms-container'>
            <div className='terms-header'>
                <div className='terms-title'>
                    <p className='title-text'><b>Beauty & Personal Care</b></p>
                </div>
                <div className='breadcrumbs'>
                    <p className='breadcrumb-text'>Home / Category / <b>Products</b></p>
                </div>
            </div>
            <div className='terms-content'>
                <div className='terms-section'>
                    <h5 className='content-title'>Beauty & Personal Care Category</h5>
                    <div className="categories-container">
                        <div className="categoryitem">
                            <img src='/images/img32.jpg' alt='img' />
                            <p>Hair Care</p>
                        </div>
                        <div className="categoryitem">
                            <img src='/images/img33.jpeg' alt='img' />
                            <p>Skin Care</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Beauty;