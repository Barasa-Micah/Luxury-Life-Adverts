import React, { useState } from 'react';
import './Transactions.css';  // Ensure this file exists
import logo from '../assets/luxurylogo.jpeg';
import { FaBars, FaHome, FaChartLine, FaUsers, FaExchangeAlt, FaBox, FaCloudUploadAlt, FaShoppingCart, FaPhone, FaSignOutAlt, FaInfinity, FaCubes, FaKey } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Transactions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('deposit');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'deposit':
        return (
          <form className="transaction-form">
            <h3>Request Deposit</h3>
            <input type="text" placeholder="Amount" />
            <input type="text" placeholder="Phone number" />
            <button type="submit">Request Deposit</button>
          </form>
        );
      case 'transfer':
        return (
          <form className="transaction-form">
            <h3>Request Transfer</h3>
            <input type="text" placeholder="Amount" />
            <input type="text" placeholder="Phone number" />
            <button type="submit">Request Transfer</button>
          </form>
        );
      case 'withdraw':
        return (
          <form className="transaction-form">
            <h3>Request Withdraw</h3>
            <input type="text" placeholder="Amount" />
            <input type="text" placeholder="Phone number" />
            <button type="submit">Request Withdraw</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="transactions-container">
      <header className="transactions-header">
        <div className="header-left">
          <img src={logo} alt="Luxury Life Adverts" className="transactions-logo" />
          <h1 className="transactions-title">Rich-Life Adverts</h1>
        </div>
        <div className="header-right">
          <FaBars className="hamburger-icon" onClick={toggleMenu} />
        </div>
      </header>
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <nav className="overlay-menu" onClick={(e) => e.stopPropagation()}>
          <h2 className="overlay-title">Menu</h2>
          <ul>
            <li><NavLink to="/dashboard"><FaHome /> Home</NavLink></li>
            <li><NavLink to="/investment"><FaChartLine /> Investment</NavLink></li>
            <li><NavLink to="/team"><FaUsers /> Team</NavLink></li>
            <li><NavLink to="/transactions"><FaExchangeAlt /> Transactions</NavLink></li>
            <li><NavLink to="/packages"><FaBox /> Packages</NavLink></li>
            <li><NavLink to="/forex"><FaInfinity /> Forex</NavLink></li>
            <li><NavLink to="/uploads"><FaCloudUploadAlt /> Uploads</NavLink></li>
            <li><NavLink to="/market-hub"><FaCubes /> Market Hub</NavLink></li>
            <li><NavLink to="/my-cart"><FaShoppingCart /> My Cart</NavLink></li>
            <li><NavLink to="/premium-codes"><FaKey /> Premium Codes</NavLink></li>
            <li><NavLink to="/customer-care"><FaPhone /> Customer Care</NavLink></li>
            <li><NavLink to="/logout"><FaSignOutAlt /> Logout</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="transactions-header-info">
        <h2>Request Deposit</h2>
      </div>
      <div className="transactions-content">
        <div className="tabs">
          <button onClick={() => setActiveTab('deposit')} className={activeTab === 'deposit' ? 'active' : ''}>Deposit</button>
          <button onClick={() => setActiveTab('transfer')} className={activeTab === 'transfer' ? 'active' : ''}>Transfer</button>
          <button onClick={() => setActiveTab('withdraw')} className={activeTab === 'withdraw' ? 'active' : ''}>Withdraw</button>
        </div>
        {renderForm()}
        <div className="card transactions-records">
          <h3>Your Transactions</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5">Your Transactions will appear here.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
