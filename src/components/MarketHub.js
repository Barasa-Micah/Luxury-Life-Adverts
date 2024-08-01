import React, { useState } from 'react';
import { FaShoppingCart, FaEnvelope } from 'react-icons/fa';
import './MarketHub.css';
import logo from '../assets/luxurylogo.jpeg'

const MarketHub = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`markethub-container ${menuOpen ? 'menu-open' : ''}`}>
      <header className="markethub-header">
        <img src={logo} alt="Rich Life Adverts Logo" className="markethub-logo" />
        <div className="header-right">
          <div className="icon-container">
            <FaEnvelope className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="icon-container">
            <FaShoppingCart className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="hamburger-icon" onClick={toggleMenu}>&#9776;</div>
        </div>
      </header>
      <div className="markethub-banner">
        <h2>MARKET-HUB.</h2>
        <p>Feel free to find Your taste in our Hub Store, Considering free delivery #upline 60%</p>
      </div>
      <div className="markethub-buttons">
        <button className="hub-button">Food Hub</button>
        <button className="hub-button">Electronic Hub</button>
        <button className="hub-button cart-button"><FaShoppingCart /> My-Cart</button>
      </div>
      <div className="markethub-panel">
        <h3>Food-Hub</h3>
        <p>Foods Dropping Soon</p>
      </div>

      <div className={`overlay ${menuOpen ? 'open' : ''}`}>
        <div className="overlay-menu">
          <h3 className="overlay-title">Menu</h3>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/investment">Investment</a></li>
            <li><a href="/transactions">Transactions</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/forex">Forex</a></li>
            <li><a href="/uploads">Uploads</a></li>
            <li><a href="/markethub">MarketHub</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketHub;
