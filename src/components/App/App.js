import { lazy, Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../Container';
import Navigation from '../Navigation';
import Spiner from '../../components/Spiner';

const HomePage = lazy(() =>
  import('../../views/HomePage.js' /*webpackChunkName: 'home-page' */),
);
const MoviesPage = lazy(() =>
  import('../../views/MoviesPage.js' /*webpackChunkName: 'movies-page' */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage.js' /*webpackChunkName: 'movie-details-page' */
  ),
);

function App() {
  const [query, setQuery] = useState(null);

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
            <MoviesPage setQuery={setQuery} query={query} />
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
