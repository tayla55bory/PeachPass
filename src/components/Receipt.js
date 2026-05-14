import React from 'react';
import './Receipt.css';

const Receipt = ({ item }) => (
  <div className="receipt-card">
    <span>{item.date}</span>
    <strong>{item.location}</strong>
    <span className="price">${item.amount}</span>
  </div>
);

export default Receipt;
