import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/movies-api';
import ReviewsList from '../components/ReviewsList';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesAPI.fatchMovieReviews(id).then(data => setReviews(data));
  }, [id]);

  return <>{reviews && <ReviewsList reviews={reviews} />}</>;
};

export default Reviews;
