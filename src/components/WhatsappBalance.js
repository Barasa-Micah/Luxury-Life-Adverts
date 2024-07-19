import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const WhatsappBalance = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Whatsapp Balance</h1>
          <div className="card-container">
            <div className="card">Current Whatsapp Balance</div>
            <div className="card">Whatsapp Transaction History</div>
            <div className="card">Top Up Whatsapp Balance</div>
            <div className="card">Withdraw from Whatsapp Balance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappBalance;
