import React from 'react';

const Cell = ({ color, onClick }) => (
  <div
    style={{
      width: '40px',
      height: '40px',
      backgroundColor: color,
      border: '1px solid #000',
      cursor: 'pointer',
    }}
    onClick={onClick}
  />
);

export default Cell;