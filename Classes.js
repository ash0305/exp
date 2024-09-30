import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Classes() {
  const [classes, setClasses] = useState([]);
  const [newClass, setNewClass] = useState({ class_name: '', subject: '', semester: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/classes')
      .then(response => setClasses(response.data));
  }, []);

  const handleAddClass = () => {
    axios.post('http://localhost:5000/classes', newClass)
      .then(response => setClasses([...classes, response.data]));
  };

  return (
    <div>
      <h2>Classes</h2>
      <input
        type="text"
        placeholder="Class Name"
        value={newClass.class_name}
        onChange={e => setNewClass({ ...newClass, class_name: e.target.value })}
      />
      <button onClick={handleAddClass}>Add Class</button>
      <ul>
        {classes.map(cls => (
          <li key={cls._id}>{cls.class_name} - {cls.subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default Classes;
