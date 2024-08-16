import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css'
import logo from '../assets/luxurylogo.jpeg';
import { FaBars, FaHome, FaChartLine, FaUsers, FaExchangeAlt, FaBox, FaCloudUploadAlt, FaShoppingCart, FaPhone, FaSignOutAlt, FaEnvelope, FaInfinity, FaCubes, FaKey } from 'react-icons/fa';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState({ username: "", firstName: "", lastName: "" });
  const [investments, setInvestments] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        const [dashboardResponse, messagesResponse, cartResponse] = await Promise.all([
          axios.get('http://localhost:5000/dashboard', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get('http://localhost:5000/unread-messages', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get('http://localhost:5000/cart-items', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const userData = dashboardResponse.data;

        setUser({
          username: userData.username,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          phone: userData.phone,
          country: userData.country,
        });

        setInvestments(userData.investments);
        setUnreadMessages(messagesResponse.data.unreadMessagesCount);
        setCartItems(cartResponse.data.cartItemsCount);

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // Handle error, e.g., redirect to login
      }
    };

    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', menuOpen);
  };

  const affiliateLink = `https://luxurylifeadverts.com/signup.php?cee=${user.firstName}${user.lastName}`;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <img src={logo} alt="Luxury Life Adverts" className="dashboard-logo" />
          <h1 className="dashboard-title">Luxury Life Adverts</h1>
        </div>
        <div className="header-right">
          <div className="icon-container">
            <FaEnvelope className="icon" />
            {unreadMessages > 0 && <span className="badge">{unreadMessages}</span>}
          </div>
          <div className="icon-container">
            <FaShoppingCart className="icon" />
            {cartItems > 0 && <span className="badge">{cartItems}</span>}
          </div>
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
      <div className="welcome-message">
        <p>Welcome Back: {user.username} ({user.country})</p>
      </div>
      <div className="package-info">
        <p>You are at <strong>No Package</strong>, 0% Profit Daily.</p>
        <button className="link-button">Click me to buy</button>
      </div>
      <div className="dashboard-content">
        <div className="card account-balance">
          <h3>Account Balance:</h3>
          <p>0.00 KSH</p>
          <div className="progress-bar progress-bar-green"></div>
        </div>
        <div className="card invested-profit">
          <h3>Invested Profit:</h3>
          {investments.length > 0 ? (
            <ul>
              {investments.map((investment, index) => (
                <li key={index}>
                  {investment.days} days, Amount: {investment.amount} KSH, Profit: {investment.profit} KSH
                </li>
              ))}
            </ul>
          ) : (
            <p>No investments yet.</p>
          )}
          <button className="card-button">Withdraw</button>
        </div>
        <div className="card whatsapp-balance">
          <h3>WhatsApp Balance:</h3>
          <p>0.00 KSH</p>
          <div className="progress-bar progress-bar-green"></div>
        </div>
        <div className="card total-whatsapp-withdrawn">
          <h3>Total WhatsApp Withdrawn:</h3>
          <p>0.00 KSH</p>
          <div className="progress-bar progress-bar-green"></div>
        </div>
        <div className="card current-package">
          <h3>Current Package</h3>
          <p>No Package</p>
          <div className="package-x">X</div>
        </div>
        <div className="card withdrawn">
          <h3>Withdrawn:</h3>
          <p>0.00 KSH</p>
          <div className="progress-bar progress-bar-green"></div>
        </div>
        <div className="card your-cashback">
          <h3>Your Cashback:</h3>
          <p>0.00 KSH</p>
          <button className="card-button">Redeem</button>
        </div>
        <div className="card deposit-balance">
          <h3>Deposit Balance:</h3>
          <p>0.00 KSH</p>
          <div className="progress-bar progress-bar-green"></div>
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
                <td>{user.email}</td>
                <td>{user.phone}</td>
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
