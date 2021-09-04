import defaultImg from '../../img/defaultImage.jpg';
import s from './CastList.module.css';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => {
  return (
    <ul className={s.castList}>
      {cast.map(el => (
        <li key={el.cast_id} className={s.castItem}>
          <img
            src={
              el.profile_path !== null
                ? `https://image.tmdb.org/t/p/w300/${el.profile_path}`
                : defaultImg
            }
            alt={el.original_name}
            width={100}
            className={s.castImage}
          />
          <p className={s.castName}>{el.original_name}</p>
          <p className={s.castCharacter}>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object),
};
export default CastList;
