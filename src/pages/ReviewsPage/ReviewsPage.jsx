import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesAPI';

export default function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    const resp = await moviesApi.fetchMoviesById(movieId, 'reviews');
    console.log(resp);
    setReviews(resp.results);
  };

  return (
    <ul>
      {reviews[0]
        ? fetchMovies().map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        : 'No reviews'}
    </ul>
  );
}
