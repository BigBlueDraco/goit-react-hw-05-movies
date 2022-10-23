import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchebar/Searchbar';
import { useSearcheMovies } from 'hooks/useSearcheMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesAPI';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const movies = useSearcheMovies(searchParams.get('query'));
  console.log(movies);
  // useEffect(() => {
  //   console.log('q');
  //   fetchMovies();
  // }, []);

  // const fetchMovies = async () => {
  //   try {
  //     const resp = await moviesApi.searchMovies(searchParams.get('query'));
  //     if (!resp) return;
  //     const { results } = resp;
  //     setMovies(results);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <>
      <Searchbar />
      {movies && <MoviesList movies={movies.results} />}
    </>
  );
}
