import { MoviesList } from 'components/MoviesList/MoviesList';
import { useFetchTrendingMovie } from 'hooks/useFetchTrendingMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { moviesApi } from 'services/moviesAPI';
export default function HomePage() {
  const movies = useFetchTrendingMovie();
  {
    console.log(movies);
  }
  return (
    <>
      <h1>Trending Today</h1>
      {movies && <MoviesList movies={movies.results} />}
    </>
  );
}
