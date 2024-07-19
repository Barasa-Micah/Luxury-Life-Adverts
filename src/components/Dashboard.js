import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="background-wrapper">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isOpen={sidebarOpen} />
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
    </div>
  );
};

export default Dashboard;
