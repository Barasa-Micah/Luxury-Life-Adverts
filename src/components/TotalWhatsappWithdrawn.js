import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const TotalWhatsappWithdrawn = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Total Whatsapp Withdrawn</h1>
          <div className="card-container">
            <div className="card">Current Total Withdrawn</div>
            <div className="card">Withdrawal History</div>
            <div className="card">Pending Withdrawals</div>
            <div className="card">Withdrawal Limits</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalWhatsappWithdrawn;
