import { Link, useLocation } from 'react-router-dom';

export const MoviesListItem = ({ title, id: movieId }) => {
  const location = useLocation();
  return (
    <li>
      <Link
        to={
          location.pathname.includes('movies')
            ? `${movieId}`
            : `movies/${movieId}`
        }
      >
        {title}
      </Link>
    </li>
  );
};
