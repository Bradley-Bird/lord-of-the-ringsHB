import React from 'react';
import styled from 'styled-components';

function CharactersEl({ characters }) {
  return (
    <Grid>
      {characters.map((character) => (
        <Card key={character.id}>
          <h4>{character.name}</h4>
          <p>Race:{character.race}</p>
          <p>birth:{character.birth}</p>
          <p>death:{character.death}</p>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  font-family: 'Bilbo', cursive;
  margin-top: 10px;
  border: 2px black solid;
  padding: 10px;
  h4 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.09rem;
  }
`;

export default CharactersEl;
