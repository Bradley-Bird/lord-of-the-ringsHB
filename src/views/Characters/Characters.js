import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';
import CharactersEl from '../../components/CharactersEl';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [races, setRaces] = useState([]);
  const [race, setRace] = useState('All');
  const params = useParams();

  async function populateDropdown() {
    const data = await fetchCharacters('All');
    const raceArr = [...new Set(data.map((character) => character.race))];
    raceArr.unshift('All');
    setRaces(raceArr);
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setCharacters(data);
    };
    populateDropdown();
    fetchData();
  }, [params.name, race]);

  return (
    <div>
      <Dropdown {...{ races, setRace }} />
      <CharactersEl {...{ characters }} />
    </div>
  );
}

export default Characters;
