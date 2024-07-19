import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="card-container">
          <div className="card">Whatsapp Balance</div>
          <div className="card">Total Whatsapp Withdrawn</div>
          <div className="card">Current Package</div>
          <div className="card">Your Cashback</div>
          <div className="card">Deposit Balance</div>
          <div className="card">Account Balance</div>
          <div className="card">Total Withdrawal</div>
          <div className="card">Invested Profit</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
