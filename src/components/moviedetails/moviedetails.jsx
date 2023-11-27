import React, { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import movieApi from '../services/movieapi';
import styles from './moviedetails.module.css';
import Cast from '../cast/cast';
import Reviews from '../reviews/reviews';

// Rename 'Navigate' to 'ReachNavigate' to avoid unused variable warning
// eslint-disable-next-line
import { Navigate as ReachNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await movieApi.getMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.error('Błąd podczas pobierania szczegółów filmu:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <div className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/movies">Back</Link>
        <div className={styles.navButtonDisabled}>Moviedetail</div>
      </div>
      <div className={`${styles.container} ${styles.content}`}>
        {movieDetails && (
          <div className={styles.movieDetails}>
            <div className={styles.moviePoster}>
              <img
                src={`https://image.tmdb.org/t/p/w780${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            </div>
            <div className={styles.movieInfo}>
              <h2>{movieDetails.title}</h2>
              <p>({new Date(movieDetails.release_date).getFullYear()})</p>
              <p>Ocena użytkowników: {movieDetails.vote_average * 10}%</p>
              <p>{movieDetails.overview}</p>
              <div className={styles.genres}>
                <strong>Genre:</strong>
                {movieDetails.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
            </div>
          </div>
        )}

<div className={styles.additionalLinks}>
  <Link to={`/movies/${movieId}/cast`}>Cast</Link>
  <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
</div>
<Routes>
  <Route path="/movies/:movieId/cast" element={<Cast />} />
  <Route path="/movies/:movieId/reviews" element={<Reviews />} />
</Routes>
      </div>
    </div>
  );
};

export default MovieDetails;