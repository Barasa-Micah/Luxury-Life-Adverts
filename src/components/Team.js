import React from 'react';
import './Team.css';
import logo from '../assets/luxurylogo.jpeg';
import { FaBars, FaHome, FaChartLine, FaUsers, FaExchangeAlt, FaBox, FaCloudUploadAlt, FaShoppingCart, FaPhone, FaSignOutAlt, FaInfinity, FaCubes, FaKey } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Team = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <div className="team-container">
      <header className="team-header">
        <div className="header-left">
          <img src={logo} alt="Luxury Life Adverts" className="team-logo" />
          <h1 className="team-title">Luxury life Adverts</h1>
        </div>
        <div className="header-right">
          <FaBars className="hamburger-icon" onClick={toggleMenu} />
        </div>
      </header>
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <nav className="overlay-menu" onClick={(e) => e.stopPropagation()}>
          <h2 className="overlay-title">Menu</h2>
          <ul>
            <li><NavLink to="/dashboard"><FaHome /> Home</NavLink></li>
            <li><NavLink to="/investment"><FaChartLine /> Investment</NavLink></li>
            <li><NavLink to="/team"><FaUsers /> Team</NavLink></li>
            <li><NavLink to="/dashboard/transactions"><FaExchangeAlt /> Transactions</NavLink></li>
            <li><NavLink to="/dashboard/packages"><FaBox /> Packages</NavLink></li>
            <li><NavLink to="/dashboard/forex"><FaInfinity /> Forex</NavLink></li>
            <li><NavLink to="/dashboard/uploads"><FaCloudUploadAlt /> Uploads</NavLink></li>
            <li><NavLink to="/dashboard/market-hub"><FaCubes /> Market Hub</NavLink></li>
            <li><NavLink to="/dashboard/my-cart"><FaShoppingCart /> My Cart</NavLink></li>
            <li><NavLink to="/dashboard/premium-codes"><FaKey /> Premium Codes</NavLink></li>
            <li><NavLink to="/dashboard/customer-care"><FaPhone /> Customer Care</NavLink></li>
            <li><NavLink to="/dashboard/logout"><FaSignOutAlt /> Logout</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="team-header-info">
        <h2>MY LUXURY LIFE TEAM.</h2>
        <p>“Keep the team under one roof #70% Assets.” <br /> #Many regards Dear Mic</p>
      </div>
      <div className="team-content">
        <div className="card team-form">
          <h3>MY LUXURY LIFE TEAM.</h3>
          <form>
            <input type="text" placeholder="Enter Username to claim" />
            <button type="submit">Claim Downline</button>
          </form>
        </div>
        <div className="card team-records">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Upline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">Your Downline will appear here.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Team;
