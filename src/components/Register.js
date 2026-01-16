import React, { useState } from "react";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  if (!isModalOpen) return null;

  return (
    // Modal Backdrop with Blur
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-all">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Close Icon */}
        <button 
          className="absolute top-5 right-5 text-gray-400 hover:text-red-500 text-3xl font-light transition-colors focus:outline-none" 
          onClick={closeModal}
        >
          &times;
        </button>

        {/* Header Section */}
        <header className="bg-teal-500 p-10 text-center text-white">
          <h2 className="text-3xl font-black uppercase tracking-widest">Register</h2>
          <p className="text-teal-100 mt-2 text-sm opacity-90">Create your account to start shopping</p>
        </header>

        {/* Form Section */}
        <form className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Mobile Number</label>
            <input 
              type="text" 
              placeholder="e.g. 9876543210" 
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium"
            />
          </div>

          {/* Custom Captcha Box */}
          <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-inner">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="captcha"
                className="w-6 h-6 accent-teal-600 cursor-pointer rounded border-gray-300"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="captcha" className="text-sm font-bold text-gray-700 cursor-pointer select-none">
                I'm not a robot
              </label>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg" 
                alt="reCAPTCHA" 
                className="w-8 h-8 opacity-70"
              />
              <span className="text-[8px] text-gray-400 mt-1 uppercase">Privacy • Terms</span>
            </div>
          </div>

          {/* Register Button */}
          <button
            className={`w-full py-4 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-lg active:scale-95 
              ${isChecked 
                ? 'bg-teal-500 hover:bg-teal-600 text-white shadow-teal-500/30' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
              }`}
            type="submit"
            disabled={!isChecked}
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account? <a href="/login" className="text-teal-600 font-bold hover:underline">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;