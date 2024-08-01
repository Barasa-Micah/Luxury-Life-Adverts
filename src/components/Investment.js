import React from 'react';
import './Investment.css';
import logo from '../assets/luxurylogo.jpeg';
import { FaBars, FaHome, FaChartLine, FaUsers, FaExchangeAlt, FaBox, FaCloudUploadAlt, FaShoppingCart, FaPhone, FaSignOutAlt, FaInfinity, FaCubes, FaKey } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Investment = () => {
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
    <div className="investment-container">
      <header className="investment-header">
        <div className="header-left">
          <img src={logo} alt="Luxury Life Adverts" className="investment-logo" />
          <h1 className="investment-title">Rich-Life Adverts</h1>
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
            <li><NavLink to="/dashboard/team"><FaUsers /> Team</NavLink></li>
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
      <div className="investment-header-info">
        <h2>Investment Info</h2>
        <p>Unlock financial growth with our exclusive investment strategy. Flexible options from 1 to 5 days, delivering an impressive 80% profit. Seamless and transparent, our process ensures hassle-free investing. Fill out the form below and start your journey.</p>
      </div>
      <div className="investment-content">
        <div className="card investment-form">
          <h3>Investment Form</h3>
          <form>
            <select name="days">
              <option value="">-- How many Days --</option>
              <option value="1">1 Day</option>
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
            </select>
            <input type="number" placeholder="Amount to Invest" />
            <input type="text" placeholder="Profit: 0.00 KSH" readOnly />
            <input type="text" placeholder="Phone Number" />
            <button type="submit">Invest Now</button>
          </form>
        </div>
        <div className="card investment-records">
          <h3>My Investment Records</h3>
          <p>Your First Investment Records will be visible here.</p>
        </div>
      </div>
    </div>
  );
};

export default Investment;
