import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import movieApi from '../services/movieapi';
import styles from './reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/movies/${movieId}`);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await movieApi.getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
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
          Reviews
        </div>
      </div>
      <h2>Reviews</h2>
      <ul className={styles.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.reviewItem}>
            <p className={styles.author}>{review.author}</p>
            <p className={styles.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;