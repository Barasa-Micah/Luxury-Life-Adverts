import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const DepositBalance = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Deposit Balance</h1>
          <div className="card-container">
            <div className="card">Current Deposit Balance</div>
            <div className="card">Deposit History</div>
            <div className="card">Make a Deposit</div>
            <div className="card">Deposit Offers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositBalance;
