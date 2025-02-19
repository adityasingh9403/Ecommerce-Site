import React from 'react';
import Footer from './Footer';
import './ByDefault.css';

const Contact = () => {
  return (
    <div className="contact-us-container">
      <div className="top-section">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1474959453144!2d80.11047219999999!3d13.026277799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0xccd069a6577e444f!2zMTPCsDAxJzM0LjYiTiA4MMKwMDYnMzcuNyJF!5e0!3m2!1sen!2sin!4v1674278762737!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="form-section">
          <h2>Contact Us</h2>
          <form>
            <div className="radio-group">
              <label>Register as*: </label>
              <label>
                <input type="radio" name="register" value="vendor" /> Vendor
              </label>
              <label>
                <input type="radio" name="register" value="customer" /> Customer
              </label>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Your Number" />
              <input type="text" placeholder="Your City" />
            </div>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="bottom-section">
        <div className="info-card">
          <div className="icon">📍</div>
          <h4>Find us</h4>
          <p>Vijay Nagar Indore</p>
        </div>
        <div className="info-card">
          <div className="icon">📞</div>
          <h4>Contact Us</h4>
          <p>9876543210</p>
        </div>
        <div className="info-card">
          <div className="icon">📧</div>
          <h4>Email Us</h4>
          <p>support@alphaplatinum.in</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;


