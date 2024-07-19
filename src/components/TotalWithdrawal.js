import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const TotalWithdrawal = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Total Withdrawal</h1>
          <div className="card-container">
            <div className="card">Total Withdrawal Amount</div>
            <div className="card">Withdrawal History</div>
            <div className="card">Withdraw Funds</div>
            <div className="card">Withdrawal Limits</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalWithdrawal;
