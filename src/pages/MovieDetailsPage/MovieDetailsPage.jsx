import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesAPI';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovies();
    console.log(movie);
  }, []);
  const fetchMovies = async () => {
    const resp = await moviesApi.fetchMoviesById(movieId);
    setMovie(resp);
  };
  const { title, vote_average, overview, genres, poster_path } = movie;
  //   console.log(genres);
  return (
    <>
      {movie && (
        <>
          <button></button>
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
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};
