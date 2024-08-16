import React, { useState } from 'react';
import { FiMessageSquare, FiShoppingCart, FiMenu, FiLogOut } from 'react-icons/fi';
import './PremiumCodes.css';

const PremiumCodes = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Implement the logout functionality here
    alert('You have been logged out.');
    // Perform any logout operations, such as clearing tokens or redirecting to a login page
    window.location.href = '/login'; // Redirect to the login page or any other page after logout
  };

  return (
    <div className="premium-codes-container">
      <div className="navbar">
        <div className="navbar-left">
          <img src="path/to/logo.png" alt="Rich-Life Adverts" className="logo" />
          <span className="navbar-title">RICH-LIFE ADVERTS.</span>
        </div>
        <div className="navbar-right">
          <div className="icon-container">
            <FiMessageSquare className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="icon-container">
            <FiShoppingCart className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="icon-container" onClick={handleMenuToggle}>
            <FiMenu className="icon" />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
          <button onClick={handleLogout} className="dropdown-item">
            <FiLogOut className="dropdown-icon" /> Logout
          </button>
        </div>
      )}
      <div className="content">
        <h1>Our Premium Codes.</h1>
        <p>This page automatically generates a (9) figure code in this format [xxx-xxx-xxx] the codes is generated every time based on defined prior's and their attributes.</p>
        <div className="cards-container">
          <div className="card copper">
            <div className="card-content">
              <div className="card-title">COPPER VISA</div>
              <div className="card-code">XXX-XXX-XXX</div>
              <ul className="card-features">
                <li>Whatsapp Approval</li>
                <li>Cashback Approval</li>
                <li>Spinning Approval</li>
                <li>Unlock Code</li>
              </ul>
              <button className="card-button">Buy 3000 KSH</button>
            </div>
          </div>
          <div className="card bronze">
            <div className="card-content">
              <div className="card-title">BRONZE VISA</div>
              <div className="card-code">XXX-XXX-XXX</div>
              <ul className="card-features">
                <li>Whatsapp Approval</li>
                <li>Cashback Approval</li>
                <li>Spinning Approval</li>
                <li>Verification Code</li>
              </ul>
              <button className="card-button">Buy 5500 KSH</button>
            </div>
          </div>
          <div className="card diamond">
            <div className="card-content">
              <div className="card-title">DIAMOND VISA</div>
              <div className="card-code">XXX-XXX-XXX</div>
              <ul className="card-features">
                <li>Whatsapp Approval</li>
                <li>Cashback Approval</li>
                <li>Spinning Approval</li>
                <li>Agent Code</li>
              </ul>
              <button className="card-button">Buy 6500 KSH</button>
            </div>
          </div>
          <div className="card gold">
            <div className="card-content">
              <div className="card-title">GOLD VISA</div>
              <div className="card-code">XXX-XXX-XXX</div>
              <ul className="card-features">
                <li>Whatsapp Approval</li>
                <li>Cashback 50,000.00 KSH</li>
                <li>Cashback Approval</li>
                <li>Spinning Approval</li>
                <li>Access Code</li>
              </ul>
              <button className="card-button">Buy 10000 KSH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCodes;
