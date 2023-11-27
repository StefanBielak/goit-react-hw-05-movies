import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import movieApi from '../services/movieapi';
import styles from './cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/movies/${movieId}`);
  };

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await movieApi.getMovieCredits(movieId);
        setCast(response.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <div className={styles.navbar}>
        <Link to="/" className={styles.navButton}>
          Home
        </Link>
        <button onClick={handleBack} className={styles.navButtonBack}>
          Back
        </button>
        <div className={styles.navButtonDisabled}>
          Cast
        </div>
      </div>
      <div className={styles.castContainer}>
        <h2>Cast</h2>
        <ul className={styles.castList}>
          {cast.map((actor) => (
            <li key={actor.id} className={styles.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt={actor.name}
                className={styles.actorImage}
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cast;