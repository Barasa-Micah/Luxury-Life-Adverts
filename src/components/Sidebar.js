import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="nav-menu">
        <ul>
          <li>Dashboard</li>
          <li>Whatsapp Balance</li>
          <li>Total Whatsapp Withdrawn</li>
          <li>Current Package</li>
          <li>Your Cashback</li>
          <li>Deposit Balance</li>
          <li>Account Balance</li>
          <li>Total Withdrawal</li>
          <li>Invested Profit</li>
          <li>Contact</li>
          <li>Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
