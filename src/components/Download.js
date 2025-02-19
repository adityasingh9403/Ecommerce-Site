import React from "react";
import './ByDefault.css';

const Download = () => {
  return (
    <div className="download-container1">
        <div className="download-container">
            <div className="logo">
                <img src="/images/img22.png"  alt="App Store" className="download-image11" />
            </div>
            <div className="context">
                <h1 className="context1"><b>Download App Now!</b></h1>
                <p>
                    Use code <strong>WELCOMEMMT</strong> and get <strong>FLAT 12% OFF*</strong> on your first domestic flight booking
                </p>
            </div>
            <div className="download-buttons">
                <img src="/images/img23.png"  alt="App Store" className="download-image11" />
                <img src="/images/img24.png" alt="Google Play" className="download-image11" />
            </div>
            <div className="qr">
                <img src="/images/img25.jpg"  alt="App Store" className="download-image1" />
            </div>  
        </div>
    </div>
  );
};

export default Download;
