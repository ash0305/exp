import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import './styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={NavLink} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/students">
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button component={NavLink} to="/classes">
          <ListItemText primary="Classes" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;

