import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Menu</h2>
        <div className="hamburger close" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <ul>
        <li><Link to="/dashboard/home">Home</Link></li>
        <li><Link to="/dashboard/investment">Investment</Link></li>
        <li><Link to="/dashboard/team">Team</Link></li>
        <li><Link to="/dashboard/transactions">Transactions</Link></li>
        <li><Link to="/dashboard/packages">Packages</Link></li>
        <li><Link to="/dashboard/forex">Forex</Link></li>
        <li><Link to="/dashboard/uploads">Uploads</Link></li>
        <li><Link to="/dashboard/market-hub">Market-Hub</Link></li>
        <li><Link to="/dashboard/my-cart">My-Cart</Link></li>
        <li><Link to="/dashboard/premium-codes">Premium-Codes</Link></li>
        <li><Link to="/dashboard/customer-care">Customer Care</Link></li>
        <li><Link to="/dashboard/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
