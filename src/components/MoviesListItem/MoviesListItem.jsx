import { Link, useLocation } from 'react-router-dom';

export const MoviesListItem = ({ title, id: movieId }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`${movieId}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};
