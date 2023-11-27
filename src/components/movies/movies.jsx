import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import movieApi from '../services/movieapi';
import styles from './movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await movieApi.searchMovies(searchQuery);
      setSearchResults(response.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className={styles.moviesContainer}>
      <div className={styles.navbar}>
        <Link to="/" className={styles.navButton}>
          <div>Home</div>
        </Link>
        <div className={styles.navButtonDisabled}>
          <div>Movies</div>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      <div className={styles.searchResults}>
        {searchResults.map((movie) => (
          <div key={movie.id} className={styles.movieResult} onClick={() => handleMovieClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className={styles.movieImage} />
            <p className={styles.movieTitle}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;