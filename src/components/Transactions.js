import React, { useEffect, useState } from 'react';
import './Transactions.css';
import logo from '../assets/luxurylogo.jpeg';
import { FaBars, FaHome, FaChartLine, FaUsers, FaExchangeAlt, FaBox, FaCloudUploadAlt, FaShoppingCart, FaPhone, FaSignOutAlt, FaInfinity, FaCubes, FaKey } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Transactions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('deposit');
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({ amount: '', phoneNumber: '' });

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/transactions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(`http://localhost:5000/transactions`, {
        type: activeTab,
        amount: formData.amount,
        phone: formData.phoneNumber,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Add the new transaction to the transactions list
      setTransactions([...transactions, response.data.transaction]);

      // Reset form
      setFormData({ amount: '', phoneNumber: '' });

    } catch (error) {
      console.error('Error submitting transaction:', error);
    }
  };

  const renderForm = () => {
    return (
      <form className="transaction-form" onSubmit={handleSubmit}>
        <h3>Request {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <button type="submit">Request {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</button>
      </form>
    );
  };

  return (
    <div className="transactions-container">
      <header className="transactions-header">
        <div className="header-left">
          <img src={logo} alt="Luxury Life Adverts" className="transactions-logo" />
          <h1 className="transactions-title">Rich-Life Adverts</h1>
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
            <li><NavLink to="/transactions"><FaExchangeAlt /> Transactions</NavLink></li>
            <li><NavLink to="/packages"><FaBox /> Packages</NavLink></li>
            <li><NavLink to="/forex"><FaInfinity /> Forex</NavLink></li>
            <li><NavLink to="/uploads"><FaCloudUploadAlt /> Uploads</NavLink></li>
            <li><NavLink to="/market-hub"><FaCubes /> Market Hub</NavLink></li>
            <li><NavLink to="/my-cart"><FaShoppingCart /> My Cart</NavLink></li>
            <li><NavLink to="/premium-codes"><FaKey /> Premium Codes</NavLink></li>
            <li><NavLink to="/customer-care"><FaPhone /> Customer Care</NavLink></li>
            <li><NavLink to="/logout"><FaSignOutAlt /> Logout</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="transactions-header-info">
        <h2>Request {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
      </div>
      <div className="transactions-content">
        <div className="tabs">
          <button onClick={() => setActiveTab('deposit')} className={activeTab === 'deposit' ? 'active' : ''}>Deposit</button>
          <button onClick={() => setActiveTab('transfer')} className={activeTab === 'transfer' ? 'active' : ''}>Transfer</button>
          <button onClick={() => setActiveTab('withdraw')} className={activeTab === 'withdraw' ? 'active' : ''}>Withdraw</button>
        </div>
        {renderForm()}
        <div className="card transactions-records">
          <h3>Your Transactions</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{new Date(transaction.created_at).toLocaleDateString()}</td>
                    <td>{transaction.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Your Transactions will appear here.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
