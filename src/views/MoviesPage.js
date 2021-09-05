import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import MoviesList from '../components/MoviesList';
import MoviesFormSubmit from '../components/MoviesFormSubmit';
import ErrorMessage from '../components/ErrorMessage';
import Spiner from '../components/Spiner';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviesPage = () => {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const nameOrder = new URLSearchParams(location.search).get('query');

  const onAddressBarWrite = order => {
    history.push({
      ...location,
      search: `query=${order}`,
    });
  };

  // useEffect(() => {
  //   effect;
  // }, []);

  // console.log(location);
  // console.log(nameOrder);

  useEffect(() => {
    if (nameOrder !== null) {
      setStatus(Status.PENDING);

      moviesAPI
        .fatchOnRquestMovies(nameOrder)
        .then(data => {
          setMovies(data.results);
          setStatus(Status.RESOLVED);
          return;
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, [nameOrder]);

  const handleMovieChenge = e => {
    const { value } = e.target;
    setMovie(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus(Status.PENDING);

    moviesAPI
      .fatchOnRquestMovies(movie)
      .then(data => {
        if (data.results.length !== 0) {
          setMovies(data.results);
          setMovie('');
          onAddressBarWrite(movie);
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

      {status === 'pending' && <Spiner />}

      {status === 'resolved' && <MoviesList movies={movies} />}

      {status === 'rejected' && <ErrorMessage error={error.message} />}
    </>
  );
};

export default MoviesPage;
