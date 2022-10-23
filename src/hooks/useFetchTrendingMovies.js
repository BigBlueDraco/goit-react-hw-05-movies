import { useEffect, useState } from 'react';
import { moviesApi } from 'services/moviesAPI';

export const useFetchTrendingMovie = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    moviesApi.fetchTrendingMoviesToday().then(setMovies);
  }, []);

  return movies;
};
