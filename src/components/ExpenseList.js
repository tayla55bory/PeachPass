import React from 'react';
import Receipt from './Receipt';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h3>Recent Transactions</h3>
      {expenses.map((exp) => (
        <Receipt key={exp.id} item={exp} />
      ))}
    </div>
  );
};

export default ExpenseList;
