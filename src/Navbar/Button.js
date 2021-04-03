import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button({profile, profileLink}) {
  return (
    <Link to={profileLink}>
      <div className='profile-btn'>{profile}</div>
    </Link>
  );
}
