import React from 'react';
import Footer from './Footer';
import './ByDefault.css';

const Home = () => {
    return (
        <div className='terms-container'>
            <div className='terms-header'>
                <div className='terms-title'>
                    <p className='title-text'><b>Home & Kitchen</b></p>
                </div>
                <div className='breadcrumbs'>
                    <p className='breadcrumb-text'>Home / Category / <b>Products</b></p>
                </div>
            </div>
            <div className='terms-content'>
                <div className='terms-section'>
                    <h5 className='content-title'>Home & Kitchen Category</h5>
                    <div className="categories-container">
                        <div className="categoryitem">
                            <img src='/images/img31.jpg' alt='img' />
                            <p>Bedding</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;