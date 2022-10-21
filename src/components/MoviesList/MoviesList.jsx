import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ id, title }) => (
          <MoviesListItem key={id} title={title} id={id} />
        ))}
    </ul>
  );
};
