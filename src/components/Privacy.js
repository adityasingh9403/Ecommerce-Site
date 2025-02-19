import React from 'react';
import './ByDefault.css';
import Footer from './Footer';

const Privacy = () => {
    return (
        <div className="terms-container">
            <div className="terms-header">
                <div className="terms-title">
                    <p className="title-text"><b>PRIVACY POLICY</b></p>
                </div>
                <div className="breadcrumbs">
                    <p className="breadcrumb-text">Home / <b>Privacy Policy</b></p>
                </div>
            </div>
            <div className="terms-content">
                <div className="terms-section">
                    <h1 className="content-title">Privacy Policy</h1>
                </div>
                <div>
                    <p className="content-text">Privacy Policy</p>
                    <p className="content-text">Alpha Silver is Multi-vendor Application from which user can purchase the products of Ecommerce according to their requirement </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Privacy;