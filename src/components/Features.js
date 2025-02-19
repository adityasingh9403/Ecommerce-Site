import React from "react";
import { FaShippingFast, FaUndo, FaPhoneAlt } from "react-icons/fa";
import './ByDefault.css';

const Features = () => {
  const features = [
    { icon: <FaShippingFast />, title: "Fast Shipping", description: "Fast Shipping at your doorstep." },
    { icon: <FaUndo />, title: "Free Returns", description: "Free return if products are damaged." },
    { icon: <FaPhoneAlt />, title: "Support 24/7", description: "24/7 and 365 days support is available." },
    { icon: "→", title: "Seller Login", description: "" },
  ];

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="feature-logo">{feature.icon}</div>
          <div className="feature-content">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Features;
