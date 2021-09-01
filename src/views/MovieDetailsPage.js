import { useParams, useRouteMatch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as moviesAPI from '../services/movies-api';
import MovieDetails from '../components/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import AdditionalMovieInfo from '../components/AdditionalMovieInfo';

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
      <AdditionalMovieInfo url={url} />

      <Route path={`${path}/cast`}>
        <Cast id={movieId} />
      </Route>

      <Route path={`${path}/reviews`}>
        <Reviews id={movieId} />
      </Route>
    </>
  );
};

export default MovieDetailsPage;
