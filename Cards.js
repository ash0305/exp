import React from 'react';
import { motion } from 'framer-motion';
import './styles/Cards.css';

function Cards({ title, value }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
    </motion.div>
  );
}

export default Cards;
