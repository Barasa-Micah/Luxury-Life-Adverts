import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const YourCashback = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Your Cashback</h1>
          <div className="card-container">
            <div className="card">Current Cashback Balance</div>
            <div className="card">Cashback History</div>
            <div className="card">Redeem Cashback</div>
            <div className="card">Cashback Offers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCashback;
