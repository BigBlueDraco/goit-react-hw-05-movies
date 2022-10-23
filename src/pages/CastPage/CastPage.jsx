import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesAPI';

export const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchMovies();
    console.log(cast);
  }, []);
  const fetchMovies = async () => {
    const resp = await moviesApi.fetchMoviesById(movieId, 'credits');
    setCast(resp.cast);
  };
  return (
    <ul>
      {cast &&
        cast.map(({ id, original_name, character, profile_path }) => (
          <li key={id}>
            <img
              width="120px"
              src={
                profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`
              }
              alt="No Foto"
            />
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        ))}
    </ul>
  );
};
