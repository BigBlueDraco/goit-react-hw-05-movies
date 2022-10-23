import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesAPI';

export const useFetchMovie = endpoint => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMoviesById(movieId, endpoint).then(setMovie);
  }, [movieId, endpoint]);

  return movie;
};
