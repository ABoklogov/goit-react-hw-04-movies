import { useEffect, useState } from 'react';
import * as moviesAPI from '../services/movies-api';
import MoviesList from '../components/MoviesList';

const HomeView = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fatchPopularMovies().then(data => setMovies(data.results));
  }, []);

  return <>{movies && <MoviesList movies={movies} />}</>;
};

export default HomeView;
