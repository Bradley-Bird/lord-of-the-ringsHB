import React from 'react';

function Dropdown({ races, setRace }) {
  return (
    <select onChange={(e) => setRace(e.target.value)}>
      {races.map((race) => (
        <option key={race}>{race}</option>
      ))}
    </select>
  );
}

export default Dropdown;
