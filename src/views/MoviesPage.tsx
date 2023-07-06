import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
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
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();
  const location = useLocation();
  const nameOrder = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (nameOrder !== null) {
      setStatus(Status.PENDING);

      moviesAPI
        .fatchOnRquestMovies(nameOrder)
        .then(data => {
          if (data.results.length !== 0) {
            setMovies(data.results);
            setMovie('');
            setStatus(Status.RESOLVED);

            return;
          }
          return Promise.reject(new Error(`this movie was not found`));
        })
        .catch(({ message }) => {
          setErrorMessage(message);
          setMovie('');
          setStatus(Status.REJECTED);
        });
    }
  }, [nameOrder]);

  const onAddressBarWrite = (order: string) => {
    history.push({
      ...location,
      search: `query=${order}`,
    });
  };

  const handleMovieChenge = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMovie(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(Status.PENDING);
    onAddressBarWrite(movie.toLowerCase());
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

      {status === 'rejected' && <ErrorMessage error={errorMessage} />}
    </>
  );
};

export default MoviesPage;
