import { MoviesList } from 'components/MoviesList/MoviesList';
import { useFetchTrendingMovie } from 'hooks/useFetchTrendingMovies';
export default function HomePage() {
  const movies = useFetchTrendingMovie();
  return (
    <>
      <h1>Trending Today</h1>
      {movies && <MoviesList movies={movies.results} />}
    </>
  );
}
