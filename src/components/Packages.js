import React from 'react';
import './Packages.css'; 
import logo from '../assets/luxurylogo.jpeg';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Packages = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <div className="packages-container">
      <header className="packages-header">
        <div className="header-left">
          <img src={logo} alt="Luxury Life Adverts" className="packages-logo" />
          <h1 className="packages-title">Luxury Life Adverts</h1>
        </div>
        <div className="header-right">
          <FaBars className="hamburger-icon" onClick={toggleMenu} />
        </div>
      </header>
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <nav className="overlay-menu" onClick={(e) => e.stopPropagation()}>
          <h2 className="overlay-title">Menu</h2>
          <ul>
            <li><NavLink to="/dashboard"><FaBars /> Home</NavLink></li>
            <li><NavLink to="/investment"><FaBars /> Investment</NavLink></li>
            <li><NavLink to="/team"><FaBars /> Team</NavLink></li>
            <li><NavLink to="/transactions"><FaBars /> Transactions</NavLink></li>
            <li><NavLink to="/packages"><FaBars /> Packages</NavLink></li>
            <li><NavLink to="/forex"><FaBars /> Forex</NavLink></li>
            <li><NavLink to="/uploads"><FaBars /> Uploads</NavLink></li>
            <li><NavLink to="/market-hub"><FaBars /> Market Hub</NavLink></li>
            <li><NavLink to="/my-cart"><FaBars /> My Cart</NavLink></li>
            <li><NavLink to="/premium-codes"><FaBars /> Premium Codes</NavLink></li>
            <li><NavLink to="/customer-care"><FaBars /> Customer Care</NavLink></li>
            <li><NavLink to="/logout"><FaBars /> Logout</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="packages-header-info">
        <h2>Our Profitable Assets</h2>
        <p>"Your profit, your happiness, you may choose to buy one of our marketing packages below." #Many regards Dear Mic</p>
      </div>
      <div className="packages-content">
        <div className="package-card">
          <h3>BASIC PLAN</h3>
          <ul>
            <li>Spinning Wheel</li>
            <li>WhatsApp Views</li>
            <li>80% Profit</li>
            <li>Cashback 3000 KSH</li>
          </ul>
          <button>Buy 1000 KSH</button>
        </div>
        <div className="package-card">
          <h3>PREMIUM PLAN</h3>
          <ul>
            <li>Spinning Wheel</li>
            <li>WhatsApp Views</li>
            <li>80% Profit</li>
            <li>Cashback 7500 KSH</li>
          </ul>
          <button>Buy 2500 KSH</button>
        </div>
        <div className="package-card">
          <h3>BOSS PLAN</h3>
          <ul>
            <li>Spinning Wheel</li>
            <li>WhatsApp Views</li>
            <li>80% Profit</li>
            <li>Cashback 15000 KSH</li>
          </ul>
          <button>Buy 5000 KSH</button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
