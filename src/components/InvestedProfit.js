import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const InvestedProfit = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Invested Profit</h1>
          <div className="card-container">
            <div className="card">Current Invested Profit</div>
            <div className="card">Investment History</div>
            <div className="card">New Investment Opportunities</div>
            <div className="card">Investment Performance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestedProfit;
