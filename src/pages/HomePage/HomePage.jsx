import { MoviesList } from 'components/MoviesList/MoviesList';
export const HomePage = () => {
  return (
    <>
      <span>Home</span>
      <h1>Trending Today</h1>
      <MoviesList movies={[{ title: 'rat' }]} />
    </>
  );
};
