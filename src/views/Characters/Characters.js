import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import { useParams } from 'react-router-dom';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters('All');
      console.log(data);
      setCharacters(data);
    };
    fetchData();
  }, [params.name]);

  return (
    <div>
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}

export default Characters;
