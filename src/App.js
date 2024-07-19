import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PasswordRecoveryPage from './components/PasswordRecoveryPage';
import Dashboard from './components/Dashboard';
import WhatsappBalance from './components/WhatsappBalance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/recover" element={<PasswordRecoveryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/whatsapp-balance" element={<WhatsappBalance />} />
      </Routes>
    </Router>
  );
}

export default App;
