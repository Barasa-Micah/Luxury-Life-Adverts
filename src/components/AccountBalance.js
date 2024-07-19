import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const AccountBalance = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Account Balance</h1>
          <div className="card-container">
            <div className="card">Current Account Balance</div>
            <div className="card">Account Transactions</div>
            <div className="card">Transfer Funds</div>
            <div className="card">Account Summary</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
