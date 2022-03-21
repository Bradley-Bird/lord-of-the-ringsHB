import { useEffect } from 'react';
import { fetchFilms } from '../../services/films';
import { useParams } from 'react-router-dom';

function Films() {
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      console.log(data);
    };
    fetchData();
  }, [params.name]);

  return <div>Films</div>;
}

export default Films;
