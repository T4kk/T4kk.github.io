import React from 'react';

function Tab({ label, onClick, isActive }) {
  return (
    <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Tab;
