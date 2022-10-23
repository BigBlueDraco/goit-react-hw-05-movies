import { useEffect, useState } from 'react';
import { moviesApi } from 'services/moviesAPI';

export const useSearchMovies = q => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    moviesApi.searchMovies(q).then(setMovies);
  }, [q]);

  return movies;
};
