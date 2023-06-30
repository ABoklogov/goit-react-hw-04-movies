import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../Container';
import Navigation from '../Navigation';
import Spiner from '../Spiner';

const HomePage = lazy(() =>
  import('../../views/HomePage' /*webpackChunkName: 'home-page' */
  ),
);
const MoviesPage = lazy(() =>
  import('../../views/MoviesPage' /*webpackChunkName: 'movies-page' */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage' /*webpackChunkName: 'movie-details-page' */
  ),
);

function App() {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<Spiner />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
