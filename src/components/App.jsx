import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
// import { CastPage } from 'pages/CastPage/CastPage';
// import { HomePage } from 'pages/HomePage/HomePage';
// import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
// import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
// import { ReviewsPage } from 'pages/ReviewsPage/ReviewsPage';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
const CastPage = lazy(() => import('pages/CastPage/CastPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
};
