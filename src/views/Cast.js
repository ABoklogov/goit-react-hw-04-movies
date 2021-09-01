import { useEffect, useState } from 'react';
import * as moviesAPI from '../services/movies-api';
import CastList from '../components/CastList';

const Cast = ({ id }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesAPI.fatchMovieActors(id).then(data => setCast(data.cast));
  }, [id]);

  return cast && <CastList cast={cast} />;
};

export default Cast;
