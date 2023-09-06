import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <button type="button" className="btn btn-block" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
