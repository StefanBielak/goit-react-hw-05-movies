const apiKey = 'fec326186e089e37ab730141e063b47b';

const movieApi = {
  getTrendingMovies: async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching trending movies:', error);
    }
  },
  searchMovies: async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error searching movies:', error);
    }
  },
  getMovieDetails: async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching movie details:', error);
    }
  },
  getMovieCredits: async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching cast:', error);
    }
  },
  getMovieReviews: async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching reviews:', error);
    }
  },
};

export default movieApi