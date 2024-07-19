import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const CurrentPackage = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Current Package</h1>
          <div className="card-container">
            <div className="card">Current Package Details</div>
            <div className="card">Package Upgrade Options</div>
            <div className="card">Package Benefits</div>
            <div className="card">Package Limitations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPackage;
