import { useFetchMovie } from 'hooks/useFetchMovie';
import { Suspense } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function MovieDetailsPage() {
  const movie = useFetchMovie();
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search } = location.state
    ? location.state.from
    : { pathname: '/index', search: '' };
  return (
    <>
      {movie ? (
        <>
          <button onClick={() => navigate(pathname + search)}>Go back</button>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
              width="350px"
            />
            <div className="film-info">
              <p className="film-info__title">{movie.title}</p>
              <p className="film-info__text">{movie.vote_average}</p>
              <p className="film-info__title">Overview</p>
              <p className="overview">{movie.overview}</p>
              <p className="film-info__title"></p>
              <ul>
                {movie.genres &&
                  movie.genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </ul>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <Link to="cast" state={location.state ?? ''}>
              Cast
            </Link>
            <Link to="reviews" state={location.state ?? ''}>
              Reviews
            </Link>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <div>No data</div>
      )}
    </>
  );
}
