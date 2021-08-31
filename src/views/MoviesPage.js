import { useState } from 'react';
import * as moviesAPI from '../services/movies-api';
import MoviesList from '../components/MoviesList';

const MoviesView = () => {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState([]);

  const handleMovieChenge = e => {
    const { value } = e.target;
    setMovie(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    moviesAPI.fatchOnRquestMovies(movie).then(data => setMovies(data.results));
    setMovie('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movie}
          onChange={handleMovieChenge}
          required
        />
        <button>Search</button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesView;
