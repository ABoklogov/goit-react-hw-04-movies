import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';

const HomeView = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fatchPopularMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li>
            <Link to="/movies" key={movie.id}>
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default HomeView;
