import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [races, setRaces] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters('All');
      const raceArr = [...new Set(data.map((character) => character.race))];
      raceArr.unshift('All');
      setRaces(raceArr);
      setCharacters(data);
    };
    fetchData();
  }, [params.name]);

  return (
    <div>
      <Dropdown {...{ races }} />
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}

export default Characters;
