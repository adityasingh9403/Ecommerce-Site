import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans">
      {/* Top Section: Map and Form */}
      <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-10 max-w-7xl mx-auto">
        
        {/* Map Section */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[450px] border border-gray-200">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3551525977843!2d75.891395!3d22.752185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd37536d40c5%3A0xc3f8371304f326a0!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-full"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-4 border-teal-500 inline-block">
            Contact Us
          </h2>
          
          <form className="space-y-4">
            {/* Radio Group */}
            <div className="flex items-center gap-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-700">Register as*:</span>
              <label className="flex items-center gap-2 cursor-pointer hover:text-teal-600 transition">
                <input type="radio" name="register" value="vendor" className="accent-teal-500 w-4 h-4" /> 
                Vendor
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-teal-600 transition">
                <input type="radio" name="register" value="customer" className="accent-teal-500 w-4 h-4" /> 
                Customer
              </label>
            </div>

            {/* Inputs Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
              />
            </div>

            {/* Inputs Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Number" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
              />
              <input 
                type="text" 
                placeholder="Your City" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
              />
            </div>

            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
            ></textarea>

            <button 
              type="submit" 
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section: Info Cards */}
      <div className="bg-white border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          
          <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-teal-50 transition group">
            <div className="text-4xl mb-4 p-4 bg-teal-100 rounded-full group-hover:bg-teal-200 transition">📍</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Find us</h4>
            <p className="text-gray-600">Vijay Nagar, Indore, MP</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-teal-50 transition group">
            <div className="text-4xl mb-4 p-4 bg-teal-100 rounded-full group-hover:bg-teal-200 transition">📞</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Call Us</h4>
            <p className="text-gray-600">+91 9876543210</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-teal-50 transition group">
            <div className="text-4xl mb-4 p-4 bg-teal-100 rounded-full group-hover:bg-teal-200 transition">📧</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Email Us</h4>
            <p className="text-gray-600 font-medium text-teal-600">support@skprimemart.in</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;