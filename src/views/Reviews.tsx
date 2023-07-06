import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/movies-api';
import ReviewsList from '../components/ReviewsList';
import IReviews from '../interfaces/Reviews.interface';

interface Props {
  id: string;
};

const Reviews = ({ id }: Props) => {
  const [reviews, setReviews] = useState<IReviews | null>(null);

  useEffect(() => {
    moviesAPI.fatchMovieReviews(id).then((data: IReviews | null) => setReviews(data));
  }, [id]);

  return <>{reviews && <ReviewsList reviews={reviews} />}</>;
};

export default Reviews;
