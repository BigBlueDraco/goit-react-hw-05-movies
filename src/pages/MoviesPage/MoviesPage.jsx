import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchebar/Searchbar';
import { useSearchMovies } from 'hooks/useSearcheMovies';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const movies = useSearchMovies(searchParams.get('query'));

  return (
    <>
      <Searchbar />
      {movies && <MoviesList movies={movies.results} />}
    </>
  );
}
