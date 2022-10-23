import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { moviesApi } from 'services/moviesAPI';
export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    const { results } = await moviesApi.fetchTrendingMoviesToday();
    setMovies(results);
  };
  return (
    <>
      <h1>Trending Today</h1>
      <MoviesList movies={movies} />
    </>
  );
};
