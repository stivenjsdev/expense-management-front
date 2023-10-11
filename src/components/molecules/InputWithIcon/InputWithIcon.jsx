import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import { Input } from '../../atoms/Input/Input';
import './InputWithIcon.css';

export function InputWithIcon({ type, placeholder, iconName }) {
  return (
    <div className="input-container">
      <Icon name={iconName} />
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}
