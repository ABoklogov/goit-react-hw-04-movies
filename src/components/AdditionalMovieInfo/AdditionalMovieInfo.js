import { NavLink } from 'react-router-dom';
import s from './AdditionalMovieInfo.module.css';

const AdditionalMovieInfo = ({ url }) => {
  return (
    <div className={s.AdditionalMovieInfo}>
      <NavLink
        to={`${url}/cast`}
        className={s.linkCast}
        activeClassName={s.linkCastActive}
      >
        Cast
      </NavLink>

      <NavLink
        to={`${url}/reviews`}
        className={s.linkCast}
        activeClassName={s.linkCastActive}
      >
        Reviews
      </NavLink>
    </div>
  );
};

export default AdditionalMovieInfo;