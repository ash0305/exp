// App.js
import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Classes from './components/Classes';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token) => {
    // Store the token in local storage
    localStorage.setItem('token', token);
    setIsAuthenticated(true); // Update authentication state
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    setIsAuthenticated(false); // Update the authentication state
  };

  return (
    <Router>
       <Navbar onLogout={handleLogout} /> {/* Pass handleLogout to Navbar */}
      <Sidebar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;  // Ensure this line is present
