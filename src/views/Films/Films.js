import { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';
import { useParams } from 'react-router-dom';

function Films() {
  const [films, setFilms] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      console.log(data);
      setFilms(data);
    };
    fetchData();
  }, [params.name]);

  return (
    <div>
      {films.map((film) => (
        <p key={film.id}>{film.title}</p>
      ))}
    </div>
  );
}

export default Films;
