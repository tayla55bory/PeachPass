import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ amount, location, id: Date.now(), date: new Date().toLocaleDateString() });
    setAmount('');
    setLocation('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input 
        type="number" 
        placeholder="Toll Amount ($)" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Gantry Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button type="submit">Log PeachPass Toll</button>
    </form>
  );
};

export default ExpenseForm;
