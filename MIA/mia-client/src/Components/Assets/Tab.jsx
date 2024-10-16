import React from 'react';
import { Link } from 'react-router-dom';

const Tab = ({ label, isActive, onClick, link }) => {
  return (
    <Link to={link}>
      <button
        className={`relative inline-flex items-center py-3 text-[16px] ${
          isActive
            ? 'text-[#006F68] border-b-2 border-[#006F68]'
            : ''
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    </Link>

  );
};

export default Tab;
