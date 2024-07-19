import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/luxurylogo.jpeg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="logo-title">LUXURY LIFE ADVERTS</h2>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/dashboard">Whatsapp Balance</Link>
          </li>
          <li>
            <Link to="/dashboard">Total Whatsapp Withdrawn</Link>
          </li>
          <li>
            <Link to="/dashboard">Current Package</Link>
          </li>
          <li>
            <Link to="/dashboard">Your Cashback</Link>
          </li>
          <li>
            <Link to="/dashboard">Deposit Balance</Link>
          </li>
          <li>
            <Link to="/dashboard">Account Balance</Link>
          </li>
          <li>
            <Link to="/dashboard">Total Withdrawal</Link>
          </li>
          <li>
            <Link to="/dashboard">Invested Profit</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
