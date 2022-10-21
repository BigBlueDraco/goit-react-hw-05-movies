import { CastPage } from 'pages/CastPage/CastPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { ReviewsPage } from 'pages/ReviewsPage/ReviewsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { HomePage } from 'pages/HomePage';
// import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
// import { MoviesPage } from 'pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
        </Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </>
  );
};
