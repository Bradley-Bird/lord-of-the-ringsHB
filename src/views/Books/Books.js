import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../../services/books';

function Books() {
  const [books, setBooks] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    fetchData();
  }, [params.name]);

  return (
    <div>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </div>
  );
}

export default Books;
