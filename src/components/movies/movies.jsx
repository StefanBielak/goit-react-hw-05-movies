import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import movieApi from '../services/movieapi';
import styles from './movies.module.css'; // Załóż, że styles zawiera odpowiednie style CSS

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
    // Przenoszenie użytkownika do strony szczegółów filmu po kliknięciu
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className={styles.moviesContainer}>
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