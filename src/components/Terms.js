import React from 'react';
import './ByDefault.css';
import Footer from './Footer';

const Terms = () => {
    return (
        <div className="terms-container">
            <div className="terms-header">
                <div className="terms-title">
                    <p className="title-text"><b>Terms & Condition</b></p>
                </div>
                <div className="breadcrumbs">
                    <p className="breadcrumb-text">Home / <b>Terms & Conditions</b></p>
                </div>
            </div>
            <div className="terms-content">
                <div className="terms-section">
                    <h1 className="content-title">Terms & Condition</h1>
                </div>
                <div>
                    <p className="content-text">Terms and conditions</p>
                    <p className="content-text">Alpha Silver is a Multi-vendor Application from which users can purchase products from Ecommerce vendors according to their requirement.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Terms;
