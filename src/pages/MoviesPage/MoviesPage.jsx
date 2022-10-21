import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchebar/Searchbar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesAPI';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const resp = await moviesApi.searchMovies(searchParams.get('query'));
      if (!resp) return;
      const { results } = resp;
      setMovies(results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Searchbar />
      <MoviesList movies={movies} />
    </>
  );
};
