import { useEffect, useState } from 'react';
import * as moviesAPI from '../services/movies-api';
import MoviesList from '../components/MoviesList';
import DaraMovies from '../interfaces/DataMovies.interface';
import Movies from '../interfaces/Movie.interface';

const HomePage = () => {
  const [movies, setMovies] = useState<Movies[] | null>(null);

  useEffect(() => {
    moviesAPI.fatchPopularMovies().then((data: DaraMovies) => {
      setMovies(data.results)
    });
  }, []);

  return <>{movies && <MoviesList movies={movies} />}</>;
};

export default HomePage;
