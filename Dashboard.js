import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './styles/Dashboard.css';

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students').then(res => setStudents(res.data));
    axios.get('http://localhost:5000/classes').then(res => setClasses(res.data));
  }, []);

  return (
    <div className="dashboard">
      <Typography variant="h4" className="dashboard-title">Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5">Total Students</Typography>
              <Typography variant="h2">{students.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5">Total Classes</Typography>
              <Typography variant="h2">{classes.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
