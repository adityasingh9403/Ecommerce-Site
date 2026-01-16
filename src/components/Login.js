import React, { useState } from "react";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    // Modal Overlay (Backdrop)
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity">
      
      {/* Modal Content Container */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold transition-colors focus:outline-none" 
          onClick={closeModal}
        >
          &times;
        </button>

        {/* Modal Header */}
        <header className="p-8 pb-4 text-center">
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">Login</h2>
          <p className="text-gray-500 mt-2 text-sm">Welcome back! Please enter your details.</p>
        </header>

        {/* Login Form */}
        <form className="p-8 pt-4 space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Mobile Number</label>
            <input 
              type="text" 
              placeholder="Enter your mobile number" 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all"
            />
          </div>

          <div className="flex items-center justify-end">
            <a href="#" className="text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline transition-colors">
              Forgot Password?
            </a>
          </div>

          <button 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-500/30 transition-all transform active:scale-95 active:shadow-inner"
            type="submit"
          >
            Login
          </button>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <a href="/register" className="text-teal-600 font-bold hover:underline">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;