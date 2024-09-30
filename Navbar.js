import React from 'react';
import './styles/Navbar.css';
import logo from './assets/logo.png';
import { AppBar, Toolbar, Typography ,Button } from '@mui/material';

function Navbar({ onLogout }) {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="navbar-title">
          Student Grade Management System
        </Typography>
        <Button color="inherit" onClick={onLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
