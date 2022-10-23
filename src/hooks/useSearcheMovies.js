import { useEffect, useState } from 'react';
import { moviesApi } from 'services/moviesAPI';

export const useSearcheMovies = q => {
  const [movies, setMovies] = useState();
  //   const [query] = useState(q);

  useEffect(() => {
    moviesApi.searchMovies(q).then(setMovies);
  }, []);

  return movies;
};
