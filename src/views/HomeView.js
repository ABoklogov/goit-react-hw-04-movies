import { useEffect, useState } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
// import MovieDetailsView from '../views/MoviesView';

const HomeView = () => {
  const { url, path } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  // const s = useRouteMatch();
  // console.log(s);

  useEffect(() => {
    moviesAPI.fatchPopularMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default HomeView;
