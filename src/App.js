import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PasswordRecoveryPage from './components/PasswordRecoverypage';
import Dashboard from './components/Dashboard';
import WhatsappBalance from './components/WhatsappBalance';
import TotalWhatsappWithdrawn from './components/TotalWhatsappWithdrawn';
import CurrentPackage from './components/CurrentPackage';
import YourCashback from './components/YourCashback';
import DepositBalance from './components/DepositBalance';
import AccountBalance from './components/AccountBalance';
import TotalWithdrawal from './components/TotalWithdrawal';
import InvestedProfit from './components/InvestedProfit';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/recover" element={<PasswordRecoveryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/whatsapp-balance" element={<WhatsappBalance />} />
        <Route path="/total-whatsapp-withdrawn" element={<TotalWhatsappWithdrawn />} />
        <Route path="/current-package" element={<CurrentPackage />} />
        <Route path="/your-cashback" element={<YourCashback />} />
        <Route path="/deposit-balance" element={<DepositBalance />} />
        <Route path="/account-balance" element={<AccountBalance />} />
        <Route path="/total-withdrawal" element={<TotalWithdrawal />} />
        <Route path="/invested-profit" element={<InvestedProfit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
