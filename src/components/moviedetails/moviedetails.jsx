import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movieApi from '../services/movieapi';
import styles from './moviedetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await movieApi.getMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
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
            <p>User Score: {movieDetails.vote_average * 10}%</p>
            <p>{movieDetails.overview}</p>
            <div className={styles.genres}>
              <strong>Genres:</strong>
              {movieDetails.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          </div>
          <div className={styles.backButton}>
            <button onClick={handleBack}>Back to Movies</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;