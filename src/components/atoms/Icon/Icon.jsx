import React from 'react';
import emailIcon from '../../../assets/email.png';
import padlockIcon from '../../../assets/padlock.png';
import './Icon.css';

export function Icon({ name }) {
  const iconImage = name === 'email' ? emailIcon : padlockIcon;
  return (
    <img className="icon" src={iconImage} alt="icon" />
  );
}
