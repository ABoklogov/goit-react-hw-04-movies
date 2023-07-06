import { useEffect, useState } from 'react';
import * as moviesAPI from '../services/movies-api';
import CastList from '../components/CastList';
import ICast from '../interfaces/Cast.interface';
import CastData from '../interfaces/CastData.interface';

interface Props {
  id: string
};

const Cast = ({ id }: Props) => {
  const [cast, setCast] = useState<ICast[] | null>(null);

  useEffect(() => {
    moviesAPI.fatchMovieActors(id).then((data: CastData) => setCast(data.cast));
  }, [id]);

  return cast && <CastList cast={cast} />;
};

export default Cast;
