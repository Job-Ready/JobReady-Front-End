import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = ({ section, onClick }) => {
  return (
    <button
      type="button"
      className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
      onClick={() => onClick(section)}
    >
      <FontAwesomeIcon icon={faPlus} style={{ color: '#000000' }} />
    </button>
  );
};

export default Button;
