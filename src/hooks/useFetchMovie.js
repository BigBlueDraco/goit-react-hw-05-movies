import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesAPI';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};
