import s from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.results.length === 0 ? (
        <p className={s.noReviewText}>no reviews</p>
      ) : (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id}>
              <p className={s.reviewName}>{review.author}</p>
              <p>{review.content}</p>
              <p className={s.reviewDate}>{review.created_at.slice(0, 10)}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewsList;
