import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../api';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Movie Recommendations</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
