import React, { useState } from 'react';
import './Input.css';

export function Input({ type, placeholder }) {
  const [value, setValue] = useState('');
  return (
    <input
      className="input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      placeholder={placeholder}
    />
  );
}
