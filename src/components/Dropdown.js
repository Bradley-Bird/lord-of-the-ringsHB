import React from 'react';
import styled from 'styled-components';

function Dropdown({ races, setRace }) {
  return (
    <StSelect onChange={(e) => setRace(e.target.value)}>
      {races.map((race) => (
        <option key={race}>{race}</option>
      ))}
    </StSelect>
  );
}

const StSelect = styled.select`
  width: 100%;
  margin: 0, 20%;
  height: 35px;
  background: rgb(56, 56, 56);
  color: white;
  padding-left: 5px;
  font-size: 14px;
  border: none;

  option {
    font-family: 'Bilbo', cursive;
    font-size: 1.5rem;
    color: black;
    background: rgb(56, 56, 56);
    color: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    text-align: center;
  }
`;
export default Dropdown;
