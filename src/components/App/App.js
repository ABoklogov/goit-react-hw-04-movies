import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './App.module.css';
import Container from '../Container';
import Navigation from '../Navigation';

const HomePage = lazy(() => import('../../views/HomePage.js'));
const MoviesPage = lazy(() => import('../../views/MoviesPage.js'));
const MovieDetailsPage = lazy(() => import('../../views/MovieDetailsPage.js'));

function App() {
  return (
    <Container>
      <Navigation />

      <Suspense
        fallback={
          <Loader className={s.Loader} type="TailSpin" color="#00BFFF" />
        }
      >
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
