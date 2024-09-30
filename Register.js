import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './styles/Register.css';

function Register() {
  const [newUser, setNewUser] = useState({ email: '', password: '', role: '' });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', newUser);
      alert('User registered successfully!');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" value={newUser.email} onChange={handleChange} required />
        <TextField type="password" label="Password" name="password" value={newUser.password} onChange={handleChange} required />
        <TextField label="Role" name="role" value={newUser.role} onChange={handleChange} required />
        <Button type="submit" variant="contained">Register</Button>
      </form>
    </div>
  );
}

export default Register;
