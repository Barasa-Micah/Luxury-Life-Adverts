import React, { useState } from 'react';
import './Forex.css';
import { FaBitcoin, FaEthereum, FaBars, FaTimes, FaHome, FaChartLine, FaUser, FaEnvelope, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/luxurylogo.jpeg'
const Forex = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="forex-container">
      <div className="dashboard-header">
        <div className="header-left">
          <Link to="/dashboard">
            <img src={logo} alt="Logo" className="dashboard-logo" />
          </Link>
        </div>
        <div className="header-right">
          <div className="icon-container">
            <FaEnvelope className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="icon-container">
            <FaCartPlus className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="hamburger-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
      <div className={`overlay ${menuOpen ? 'open' : ''}`}>
        <div className="overlay-menu">
          <h2 className="overlay-title">Menu</h2>
          <ul>
            <li>
              <Link to="/dashboard" onClick={toggleMenu}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/investment" onClick={toggleMenu}>
                <FaChartLine /> Investment
              </Link>
            </li>
            <li>
              <Link to="/transactions" onClick={toggleMenu}>
                <FaUser /> Transactions
              </Link>
            </li>
            <li>
              <Link to="/packages" onClick={toggleMenu}>
                <FaEnvelope /> Packages
              </Link>
            </li>
            <li>
              <Link to="/forex" onClick={toggleMenu}>
                <FaCartPlus /> Forex
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="forex-header">
        <h1>RICH FOREX BOTS.</h1>
        <p>"Since Richlife Provides Wealth Standards below are Forex Bots And pdf strategie template that we consider as an Assets Feel free to buy that Suits you need. #upline 70%"</p>
      </div>
      <div className="forex-cards">
        <div className="forex-card">
          <FaBitcoin className="forex-icon" />
          <h3>LITE-COIN</h3>
          <ul>
            <li>Access to Bot</li>
            <li>Deriv PDF template</li>
            <li>Tutorial</li>
            <li>Profit 50%</li>
          </ul>
          <button>Buy 1000 KSH</button>
        </div>
        <div className="forex-card">
          <FaBitcoin className="forex-icon" />
          <h3>BOOGIE-COIN</h3>
          <ul>
            <li>Access to Bot</li>
            <li>Deriv PDF template</li>
            <li>Tutorial</li>
            <li>Profit 60%</li>
          </ul>
          <button>Buy 1800 KSH</button>
        </div>
        <div className="forex-card">
          <FaEthereum className="forex-icon" />
          <h3>SOLANA-COIN</h3>
          <ul>
            <li>Access to Bot</li>
            <li>Deriv PDF template</li>
            <li>Tutorial</li>
            <li>Profit 70%</li>
          </ul>
          <button>Buy 2500 KSH</button>
        </div>
        <div className="forex-card">
          <FaBitcoin className="forex-icon" />
          <h3>BIT-COIN</h3>
          <ul>
            <li>Access to Bot</li>
            <li>Deriv PDF template</li>
            <li>Tutorial</li>
            <li>Profit 90%</li>
          </ul>
          <button>Buy 4500 KSH</button>
        </div>
      </div>
    </div>
  );
};

export default Forex;
