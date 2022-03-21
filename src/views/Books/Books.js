import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../../services/books';

function Books() {
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      console.log(data);
    };
    fetchData();
  }, [params.name]);

  return <div>Books</div>;
}

export default Books;
