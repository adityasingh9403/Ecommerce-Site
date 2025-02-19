import React, { useState } from "react";
import "./ByDefault.css";

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
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>&times;</button>
        <header className="modal-header">
          <h2>Register</h2>
        </header>
        <form>
          <label>
            <input type="text" placeholder="Mobile number" />
          </label>
          <div className="captcha-container">
            <input
              type="checkbox"
              id="captcha"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="captcha">I'm not a robot</label>
          </div>
          <button
            className="register-button"
            type="submit"
            disabled={!isChecked}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
