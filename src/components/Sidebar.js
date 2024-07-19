import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="nav-menu">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/whatsapp-balance">Whatsapp Balance</Link></li>
          <li><Link to="/total-whatsapp-withdrawn">Total Whatsapp Withdrawn</Link></li>
          <li><Link to="/current-package">Current Package</Link></li>
          <li><Link to="/your-cashback">Your Cashback</Link></li>
          <li><Link to="/deposit-balance">Deposit Balance</Link></li>
          <li><Link to="/account-balance">Account Balance</Link></li>
          <li><Link to="/total-withdrawal">Total Withdrawal</Link></li>
          <li><Link to="/invested-profit">Invested Profit</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
