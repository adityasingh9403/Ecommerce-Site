import React, { useState } from "react";
import "./ByDefault.css";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>&times;</button>
        <header className="modal-header">
          <h2>Login</h2>
        </header>
        <form>
          <label>
            <input type="text" placeholder="Mobile number" />
          </label>
          <label>
            <input type="password" placeholder="Password" />
          </label>
          <label className="forgot-password">
            <a href="#">Forgot Password?</a>
          </label>
          <button className="login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
