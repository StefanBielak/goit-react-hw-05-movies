import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieApi from '../services/movieapi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await movieApi.getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;

  return (
    <div>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>Release Date: {release_date}</p>
      <p>User Rating: {vote_average}%</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres.map((genre) => genre.name).join(', ')}</p>
    </div>
  );
};

export default MovieDetails;