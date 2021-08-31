import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as moviesAPI from '../services/movies-api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fatchDetailsMovie(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);
  // console.log(movie.poster_path);

  return (
    <>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />{' '}
          <h1>{movie.title}</h1>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
