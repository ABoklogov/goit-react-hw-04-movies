import {
  useParams,
  useRouteMatch,
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import s from './MovieDetailsPage.module.css';
import * as moviesAPI from '../services/movies-api';
import MovieDetails from '../components/MovieDetails';
import AdditionalMovieInfo from '../components/AdditionalMovieInfo';
import ErrorMessage from '../components/ErrorMessage';
import Spiner from '../components/Spiner';
import Button from '../components/Button';
import Movie from '../interfaces/Movie.interface';

const Cast = lazy(() => import('./Cast' /*webpackChunkName: 'cast' */));
const Reviews = lazy(() =>
  import('./Reviews' /*webpackChunkName: 'reviews' */),
);

type TState = {
  from?: TLocation;
}
type TLocation = {
  pathname?: string;
  state?: TState;
  from?: TLocation;
};

const MovieDetailsPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState('');
  const location = useLocation<TLocation>();
  const history = useHistory();

  useEffect(() => {
    moviesAPI
      .fatchDetailsMovie(movieId)
      .then((data: Movie | null) => {
        setMovie(data);
      })
      .catch(error => setError(error));
  }, [movieId]);

  const onGoBack = () => {
    const backLocation = location?.state?.from;

    if (backLocation?.pathname === `/movies/${movieId}`) {
      history.push(backLocation?.state?.from);
      return;
    }

    history.push(backLocation ?? '/');
  };

  return (
    <>
      <div className={s.buttonBox}>
        <Button onGoBack={onGoBack} />
      </div>

      {(movie && <MovieDetails movie={movie} />) || (
        <ErrorMessage error={error} />
      )}

      <AdditionalMovieInfo url={url} />

      <Suspense fallback={<Spiner />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast id={movieId} />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews id={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
