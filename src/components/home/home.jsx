import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import movieApi from '../services/movieapi';
import styles from './home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await movieApi.getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Przeniesienie do nowej ścieżki z parametrem wyszukiwania
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <button
          onClick={() => handleNavigation('/')}
          className={location.pathname === '/' ? styles.active : ''}
        >
          <div>Home</div>
        </button>
        <button
          onClick={() => handleNavigation('/movies')}
          className={location.pathname === '/movies' ? styles.active : ''}
        >
          <div>Movies</div>
        </button>
        {/* Dodaj pole wyszukiwania */}
        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={styles.trendingMovies}>
        <h2 className={styles.trendingHeader}>Trending Movies</h2>
        <ul className={styles.movieList}>
          {trendingMovies.map((movie) => (
            <li key={movie.id} className={styles.movieItem}>
              <Link to={`/movies/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;