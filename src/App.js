import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import AccountForm from './components/accounts/AccountForm';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/account" element={<AccountForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;