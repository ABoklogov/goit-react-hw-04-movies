import { Route, Switch } from 'react-router-dom';
import Container from '../Container';
import Navigation from '../Navigation';
import HomeView from '../../views/HomeView';
import MoviesView from '../../views/MoviesView';
// import MovieDetailsView from '../../views/MovieDetailsView';
import NotFoundView from '../../views/NotFoundView';

function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route path="/movies">
          <MoviesView />
        </Route>

        {/* <Route path="/movies/:movieId">
        <MovieDetailsView />
      </Route> */}

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
