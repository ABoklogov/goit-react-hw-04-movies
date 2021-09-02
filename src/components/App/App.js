import { Route, Switch } from 'react-router-dom';
import Container from '../Container';
import Navigation from '../Navigation';
import HomePage from '../../views/HomePage';
import MoviesPage from '../../views/MoviesPage';
import MovieDetailsPage from '../../views/MovieDetailsPage';
import NotFoundView from '../../views/NotFoundView';

function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <HomePage />
          {/* <NotFoundView /> */}
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
