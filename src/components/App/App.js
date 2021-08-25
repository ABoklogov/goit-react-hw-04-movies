import { Route } from 'react-router-dom';
import Container from '../Container';
import Navigation from '../Navigation';
import HomeView from '../../views/HomeView';

function App() {
  return (
    <Container>
      <Navigation />

      <Route exact path="/">
        <HomeView />
      </Route>
    </Container>
  );
}

export default App;
