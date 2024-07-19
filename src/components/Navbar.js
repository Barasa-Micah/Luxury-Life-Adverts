import React from 'react';
import './Navbar.css';
import logo from '../assets/luxurylogo.jpeg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">LUXURY LIFE ADVERTS</span>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." className="navbar-search" />
        <div className="navbar-icons">
          <span className="navbar-icon">🔔</span>
          <span className="navbar-icon">💼</span>
          <span className="navbar-icon">👤</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
