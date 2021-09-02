import { useState } from 'react';
import * as moviesAPI from '../services/movies-api';
import MoviesList from '../components/MoviesList';
import MoviesFormSubmit from '../components/MoviesFormSubmit';
import ErrorMessage from '../components/ErrorMessage';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviesView = () => {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const handleMovieChenge = e => {
    const { value } = e.target;
    setMovie(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    moviesAPI
      .fatchOnRquestMovies(movie)
      .then(data => {
        if (data.results.length !== 0) {
          setMovies(data.results);
          setMovie('');
          setStatus(Status.RESOLVED);

          return;
        }
        return Promise.reject(new Error(`this movie was not found`));
      })
      .catch(error => {
        setError(error);
        setMovie('');
        setStatus(Status.REJECTED);
      });
  };

  return (
    <>
      <MoviesFormSubmit
        submit={handleSubmit}
        handleChenge={handleMovieChenge}
        movie={movie}
      />

      {status === 'resolved' && <MoviesList movies={movies} />}

      {status === 'rejected' && <ErrorMessage error={error.message} />}
    </>
  );
};

export default MoviesView;
