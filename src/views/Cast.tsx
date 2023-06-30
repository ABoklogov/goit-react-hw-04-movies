import { useEffect, useState } from 'react';
import * as moviesAPI from '../services/movies-api';
import CastList from '../components/CastList';

interface Props {
  id: string
};

const Cast = ({ id }: Props) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesAPI.fatchMovieActors(id).then(data => setCast(data.cast));
  }, [id]);

  return cast && <CastList cast={cast} />;
};

export default Cast;
