import React from 'react';

function Dropdown({ races }) {
  return (
    <select>
      {races.map((race) => (
        <option key={race}>{race}</option>
      ))}
    </select>
  );
}

export default Dropdown;
