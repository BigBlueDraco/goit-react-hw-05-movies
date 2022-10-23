import { useFetchMovie } from 'hooks/useFetchMovie';

export default function CastPage() {
  const cast = useFetchMovie('credits');

  return (
    <ul>
      {cast &&
        cast.cast.map(({ id, original_name, character, profile_path }) => (
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
}
