import { Link } from 'react-router-dom';

export const MoviesListItem = ({ title, id: movieId }) => {
  return (
    <li>
      <Link to={`movies/${movieId}`}>{title}</Link>
    </li>
  );
};
