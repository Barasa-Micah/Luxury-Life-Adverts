import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Dashboard.css';

const AccountBalance = () => <div className="content">Account Balance Content</div>;
const InvestedProfit = () => <div className="content">Invested Profit Content</div>;
const WhatsappBalance = () => <div className="content">Whatsapp Balance Content</div>;
const Withdrawn = () => <div className="content">Withdrawn Content</div>;
const Cashback = () => <div className="content">Cashback Content</div>;
const DepositBalance = () => <div className="content">Deposit Balance Content</div>;

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/dashboard/account-balance">Account Balance</Link></li>
          <li><Link to="/dashboard/invested-profit">Invested Profit</Link></li>
          <li><Link to="/dashboard/whatsapp-balance">Whatsapp Balance</Link></li>
          <li><Link to="/dashboard/withdrawn">Withdrawn</Link></li>
          <li><Link to="/dashboard/cashback">Cashback</Link></li>
          <li><Link to="/dashboard/deposit-balance">Deposit Balance</Link></li>
        </ul>
      </div>
      <div className="content-area">
        <Routes>
          <Route path="account-balance" element={<AccountBalance />} />
          <Route path="invested-profit" element={<InvestedProfit />} />
          <Route path="whatsapp-balance" element={<WhatsappBalance />} />
          <Route path="withdrawn" element={<Withdrawn />} />
          <Route path="cashback" element={<Cashback />} />
          <Route path="deposit-balance" element={<DepositBalance />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
