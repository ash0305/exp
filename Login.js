import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './styles/Login.css';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';


function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', credentials);
      localStorage.setItem('token', response.data.token); // Save JWT token
      onLogin(response.data.token); // Call the onLogin function
    } catch (error) {
      alert('Login failed: ' + error.response.data.message);
    }
  };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from local storage
//     setIsAuthenticated(false); // Update authentication state
//   };
  

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" value={credentials.email} onChange={handleChange} required />
        <TextField type="password" label="Password" name="password" value={credentials.password} onChange={handleChange} required />
        <Button type="submit" variant="contained">Login</Button>
      </form>
    </div>
  );
}

export default Login;
