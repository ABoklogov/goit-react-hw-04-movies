import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Movie from '../../interfaces/Movie.interface';

interface Props {
  movies: Movie[]
};

const MoviesList = ({ movies }: Props) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
