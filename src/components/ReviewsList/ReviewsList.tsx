import s from './ReviewsList.module.css';
import IReviews from '../../interfaces/Reviews.interface';

interface Props {
  reviews: IReviews;
}

const ReviewsList = ({ reviews }: Props) => {
  return (
    <>
      {reviews.results.length === 0 ? (
        <p className={s.noReviewText}>no reviews</p>
      ) : (
        <ul>
          {reviews.results.map(({ id, author, content, created_at }) => (
            <li key={id}>
              <p className={s.reviewName}>{author}</p>
              <p>{content}</p>
              <p className={s.reviewDate}>{created_at.slice(0, 10)}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewsList;
