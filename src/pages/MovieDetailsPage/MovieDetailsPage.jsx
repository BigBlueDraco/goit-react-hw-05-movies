import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesAPI';

export const MovieDetailsPage = () => {
  const { movie, setMovie } = useState();
  const { movieId } = useParams();
  const fetchMovies = async () => {
    const { results } = await moviesApi.fetchMoviesById(movieId);
    setMovie(results);
  };
  return (
    <>
      <button></button>
      <div>
        <img src="" alt="" />
        <div className="film-info">
          <p className="film-info__title"></p>
          <p className="film-info__text"></p>
          <p className="film-info__title"></p>
          <p className="overview"></p>
          <p className="film-info__title"></p>
          <p className="film-info__text"></p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};
