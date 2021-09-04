import defaultImg from '../../img/defaultImage.jpg';
import s from './CastList.module.css';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => {
  return (
    <ul className={s.castList}>
      {cast.map(({ cast_id, profile_path, original_name, character }) => (
        <li key={cast_id} className={s.castItem}>
          <img
            src={
              profile_path !== null
                ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                : defaultImg
            }
            alt={original_name}
            width={100}
            className={s.castImage}
          />
          <p className={s.castName}>{original_name}</p>
          <p className={s.castCharacter}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object),
};
export default CastList;
