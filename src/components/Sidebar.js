import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/dashboard/account-balance">Account Balance</Link></li>
        <li><Link to="/dashboard/invested-profit">Invested Profit</Link></li>
        <li><Link to="/dashboard/whatsapp-balance">Whatsapp Balance</Link></li>
        <li><Link to="/dashboard/withdrawn">Withdrawn</Link></li>
        <li><Link to="/dashboard/cashback">Cashback</Link></li>
        <li><Link to="/dashboard/deposit-balance">Deposit Balance</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
