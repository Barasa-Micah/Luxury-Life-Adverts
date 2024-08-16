import React, { useState, useEffect } from 'react';
import './Investment.css';
import logo from '../assets/luxurylogo.jpeg';
import { FaBars, FaHome, FaChartLine, FaUsers, FaExchangeAlt, FaBox, FaCloudUploadAlt, FaShoppingCart, FaPhone, FaSignOutAlt, FaInfinity, FaCubes, FaKey } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Investment = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [days, setDays] = useState('');
  const [amount, setAmount] = useState('');
  const [profit, setProfit] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [investmentRecords, setInvestmentRecords] = useState([]);

  useEffect(() => {
    const fetchInvestmentRecords = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInvestmentRecords(response.data.investments);
      } catch (error) {
        console.error('Error fetching investment records:', error);
      }
    };

    fetchInvestmentRecords();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const handleInvest = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/investment',
        { days, amount, profit },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      // Reset form fields
      setDays('');
      setAmount('');
      setProfit('');
      setPhoneNumber('');
      // Re-fetch investment records
      const updatedRecords = await axios.get('http://localhost:5000/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInvestmentRecords(updatedRecords.data.investments);
    } catch (error) {
      console.error('Error submitting investment:', error);
      alert('Failed to submit investment. Please try again.');
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
          <form onSubmit={handleInvest}>
            <select name="days" value={days} onChange={(e) => setDays(e.target.value)} required>
              <option value="">-- How many Days --</option>
              <option value="1">1 Day</option>
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
            </select>
            <input
              type="number"
              placeholder="Amount to Invest"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Profit: 0.00 KSH"
              value={profit}
              onChange={(e) => setProfit(e.target.value)}
              readOnly
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <button type="submit">Invest Now</button>
          </form>
        </div>
        <div className="card investment-records">
          <h3>My Investment Records</h3>
          {investmentRecords.length > 0 ? (
            <ul>
              {investmentRecords.map((record, index) => (
                <li key={index}>
                  {record.days} days, Amount: {record.amount} KSH, Profit: {record.profit} KSH
                </li>
              ))}
            </ul>
          ) : (
            <p>Your First Investment Records will be visible here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Investment;
