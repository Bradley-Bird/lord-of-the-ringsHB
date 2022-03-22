import React from 'react';
import styled from 'styled-components';
import { Ringbearer } from './RINGM___.TTF';

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
  h4 {
    @import{ url('./RINGM___.TTF');
    }
    font-family: 'Ringbearer';
    font-size: 3rem;
    
  }
  margin-top: 10px;
  border: 2px black solid;
  padding: 10px;
  p {
    font-family: 'Bilbo', cursive;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.09rem;
  }
`;

export default CharactersEl;
