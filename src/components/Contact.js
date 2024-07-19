import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Dashboard.css';
import './Background.css';

const Contact = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Contact Us</h1>
          <div className="card-container">
            <div className="card">Contact Information</div>
            <div className="card">Support</div>
            <div className="card">Feedback</div>
            <div className="card">Social Media</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
