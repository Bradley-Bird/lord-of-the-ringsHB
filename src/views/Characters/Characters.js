import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [races, setRaces] = useState([]);
  const [race, setRace] = useState('All');
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      const raceArr = [...new Set(data.map((character) => character.race))];
      raceArr.unshift('All');
      setRaces(raceArr);
      setCharacters(data);
    };
    fetchData();
  }, [params.name, race]);

  return (
    <div>
      <Dropdown {...{ races, setRace }} />
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}

export default Characters;
