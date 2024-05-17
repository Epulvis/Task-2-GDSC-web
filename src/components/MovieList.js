import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import '../index.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className='movies__container'>
        {movies.map(movie => (
          <div className='movies__card' key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className='movies__images'
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
