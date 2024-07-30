import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import logo from '../assets/luxurylogo.jpeg';
import { FaBars, FaHome, FaChartLine, FaUsers, FaExchangeAlt, FaBox, FaCloudUploadAlt, FaShoppingCart, FaPhone, FaSignOutAlt, FaEnvelope } from 'react-icons/fa';

const Dashboard = () => {
  const [user, setUser] = useState({ username: "", firstName: "", lastName: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    if (storedUsername && storedFirstName && storedLastName) {
      setUser({ username: storedUsername, firstName: storedFirstName, lastName: storedLastName });
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const affiliateLink = `https://luxurylifeadverts.com/signup.php?cee=${user.firstName}${user.lastName}`;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <img src={logo} alt="Luxury Life Adverts" className="dashboard-logo" />
          <h1 className="dashboard-title">Rich-Life Adverts</h1>
        </div>
        <div className="header-right">
          <FaEnvelope className="icon" />
          <FaShoppingCart className="icon" />
          <FaBars className="hamburger-icon" onClick={toggleMenu} />
        </div>
      </header>
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <nav className="overlay-menu" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li><NavLink to="/dashboard/home"><FaHome /> Home</NavLink></li>
            <li><NavLink to="/dashboard/investment"><FaChartLine /> Investment</NavLink></li>
            <li><NavLink to="/dashboard/team"><FaUsers /> Team</NavLink></li>
            <li><NavLink to="/dashboard/transactions"><FaExchangeAlt /> Transactions</NavLink></li>
            <li><NavLink to="/dashboard/packages"><FaBox /> Packages</NavLink></li>
            <li><NavLink to="/dashboard/uploads"><FaCloudUploadAlt /> Uploads</NavLink></li>
            <li><NavLink to="/dashboard/market-hub"><FaShoppingCart /> Market Hub</NavLink></li>
            <li><NavLink to="/dashboard/customer-care"><FaPhone /> Customer Care</NavLink></li>
            <li><NavLink to="/dashboard/logout"><FaSignOutAlt /> Logout</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="welcome-message">
        <p>Welcome Back: {user.username} (Ke)</p>
      </div>
      <div className="package-info">
        <p>You are at <strong>No Package</strong>, 0% Profit Daily.</p>
        <button className="link-button">Click me to buy</button>
      </div>
      <div className="dashboard-content">
        <div className="card account-balance">
          <h3>Account Balance:</h3>
          <p>0.00 KSH</p>
        </div>
        <div className="card invested-profit">
          <h3>Invested Profit:</h3>
          <p>0.00 KSH</p>
          <button className="card-button">Withdraw</button>
        </div>
        <div className="card whatsapp-balance">
          <h3>Whatsapp Balance:</h3>
          <p>0.00 KSH</p>
        </div>
        <div className="card total-whatsapp-withdrawn">
          <h3>Total Whatsapp Withdrawn:</h3>
          <p>0.00 KSH</p>
        </div>
        <div className="card current-package">
          <h3>Current Package:</h3>
          <p>No Package</p>
          <div className="package-x">X</div>
        </div>
        <div className="card withdrawn">
          <h3>Withdrawn:</h3>
          <p>0.00 KSH</p>
        </div>
        <div className="card cashback">
          <h3>Your Cashback:</h3>
          <p>0.00 KSH</p>
          <button className="card-button">Redeem</button>
        </div>
        <div className="card deposit-balance">
          <h3>Deposit Balance:</h3>
          <p>0.00 KSH</p>
        </div>
      </div>
      <footer className="dashboard-footer">
        <div className="user-details">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.username}</td>
                <td>barasamica@gmail.com</td>
                <td>11412121111</td>
              </tr>
            </tbody>
          </table>
          <div className="affiliate-link">
            <p>Affiliate link:</p>
            <a href={affiliateLink}>Luxury Life</a>
          </div>
        </div>
        <button className="copy-link-button">Copy Link</button>
      </footer>
    </div>
  );
};

export default Dashboard;
