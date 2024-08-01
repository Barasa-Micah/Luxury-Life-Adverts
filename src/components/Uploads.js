import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import logo from '../assets/luxurylogo.jpeg'
import './Uploads.css';

const Uploads = () => {
  return (
    <div className="uploads-container">
      <header className="uploads-header">
        <div className="logo-container">
          <img
            src={logo}
            alt="luxury life Adverts Logo"
            className="uploads-logo"
          />
          <h1>LUXURY LIFE ADVERTS.</h1>
        </div>
        <nav className="uploads-navbar">
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/investment">Investment</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/transactions">Transactions</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/forex">Forex</a></li>
            <li><a href="/uploads">Uploads</a></li>
            <li><a href="/market-hub">Market Hub</a></li>
            <li><a href="/cart">My Cart</a></li>
            <li><a href="/premium-codes">Premium Codes</a></li>
            <li><a href="/customer-care">Customer Care</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
      </header>
      <main className="uploads-main">
        <section className="upload-section">
          <div className="upload-buttons">
            <button className="upload-tab">Submitting Panel</button>
            <button className="upload-tab">Downloading Panel</button>
          </div>
          <form className="upload-form">
            <input type="text" placeholder="Views" />
            <input type="text" placeholder="Receiving:" />
            <input type="text" placeholder="Your Phone" />
            <input type="file" />
            <button type="submit" className="upload-button">
              Upload <FaCloudUploadAlt />
            </button>
          </form>
        </section>
        <section className="uploads-list">
          <h2>Your Uploads</h2>
          <table className="uploads-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Photo</th>
                <th>Paying</th>
                <th>Viewers</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">Your uploads will appear here.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Uploads;
