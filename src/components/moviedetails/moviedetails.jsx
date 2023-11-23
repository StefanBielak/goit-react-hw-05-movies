import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieApi from '../movies/movies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

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

  return (
    <div>
      {movieDetails ? (
        <>
          <h2>{movieDetails.title}</h2>
          {/* display other movie details */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;