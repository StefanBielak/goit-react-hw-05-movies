import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./home/home'));
const Movies = lazy(() => import('./movies/movies'));
const MovieDetails = lazy(() => import('./moviedetails/moviedetails'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./reviews/reviews'));

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:movieId" exact component={MovieDetails} />
          <Route path="/movies/:movieId/cast" exact component={Cast} />
          <Route path="/movies/:movieId/reviews" exact component={Reviews} />
          <Route path="/react-homework-template" element={<Home />} />
          </Routes>
      </Suspense>
    </Router>
  );
};
