import React from 'react';
import './ByDefault.css';
import Footer from './Footer';

const About = () => {
    return (
        <div className="terms-container">
            <div className="terms-header">
                <div className="terms-title">
                    <p className="title-text"><b>ABOUT US</b></p>
                </div>
                <div className="breadcrumbs">
                    <p className="breadcrumb-text">Home / <b>About Us</b></p>
                </div>
            </div>
            <div className="terms-content">
                <div className="terms-section">
                    <h1 className="content-title">About Us</h1>
                </div>
                <div>
                    <p className="content-text">About Us</p>
                    <p className="content-text">
                        Alpha Silver is an online store and wholesale dealer in India dealing in all Home Appliances. 
                        With over 10,000 products and over 1000 brands in our catalogue, you will find everything you are looking for.
                        Right from TVs, Washing Machines, Refrigerators, ACs, Air Coolers, Audio Devices (Headphones/Speakers), Gas Stoves, Electric Stoves, etc.
                        Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices.
                        We will deliver within 24 hours. In case of any queries or further details, feel free to write to us at support@alphasilver.in.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
