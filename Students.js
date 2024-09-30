import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import './styles/Students.css';

function Students() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', email: '', major: '', enrollment_year: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/students').then(res => setStudents(res.data));
  }, []);

  const addStudent = async () => {
    try {
      const response = await axios.post('http://localhost:5000/students', newStudent, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token for authentication
        },
      });
      setStudents([...students, response.data]);
      setNewStudent({ name: '', email: '', major: '', enrollment_year: '' });
    } catch (error) {
      alert('Failed to add student: ' + error.response.data.message);
    }
  };
  

  return (
    <div className="students">
      <h2>Students</h2>
      <div className="student-form">
        <TextField label="Name" value={newStudent.name} onChange={e => setNewStudent({ ...newStudent, name: e.target.value })} />
        <TextField label="Email" value={newStudent.email} onChange={e => setNewStudent({ ...newStudent, email: e.target.value })} />
        <TextField label="Major" value={newStudent.major} onChange={e => setNewStudent({ ...newStudent, major: e.target.value })} />
        <TextField label="Year" type="number" value={newStudent.enrollment_year} onChange={e => setNewStudent({ ...newStudent, enrollment_year: e.target.value })} />
        <Button variant="contained" color="primary" onClick={addStudent}>Add Student</Button>
      </div>
      <Paper className="student-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Major</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student._id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.major}</TableCell>
                <TableCell>{student.enrollment_year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default Students;
