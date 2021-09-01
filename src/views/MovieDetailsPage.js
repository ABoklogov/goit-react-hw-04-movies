import { NavLink, useParams, useRouteMatch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as moviesAPI from '../services/movies-api';
import MovieDetails from '../components/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fatchDetailsMovie(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      {movie && <MovieDetails movie={movie} />}
      <div>
        <div>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </div>
        <div>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </div>
      </div>

      <Route path={`${path}/cast`}>
        <Cast id={movieId} />
      </Route>

      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route>
    </>
  );
};

export default MovieDetailsPage;
