import { useEffect } from 'react';
import { useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { moviesApi } from 'services/moviesAPI';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search } = location.state.from;
  useEffect(() => {
    fetchMovies();
  });
  const fetchMovies = async () => {
    try {
      const resp = await moviesApi.fetchMoviesById(movieId);
      setMovie(resp);
    } catch (err) {
      console.log(err);
    }
  };
  const { title, vote_average, overview, genres, poster_path } = movie;
  return (
    <>
      {movie && (
        <>
          <button onClick={() => navigate(pathname + search)}>Go back</button>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              width="350px"
            />
            <div className="film-info">
              <p className="film-info__title">{title}</p>
              <p className="film-info__text">{vote_average}</p>
              <p className="film-info__title">Overview</p>
              <p className="overview">{overview}</p>
              <p className="film-info__title"></p>
              <ul>
                {genres &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </ul>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};
