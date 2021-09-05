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

const Cast = lazy(() => import('./Cast.js' /*webpackChunkName: 'cast' */));
const Reviews = lazy(() =>
  import('./Reviews.js' /*webpackChunkName: 'reviews' */),
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    moviesAPI
      .fatchDetailsMovie(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => setError(error));
  }, [movieId]);

  // location.search = '123';
  // console.log(location);

  const onGoBack = () => {
    if (location?.state?.from?.pathname === `/movies/${movieId}`) {
      history.push('/movies');

      return;
    }

    history.push(location?.state?.from ?? '/');
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
