import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './AdditionalMovieInfo.module.css';

const AdditionalMovieInfo = ({ url }) => {
  const location = useLocation();

  return (
    <div className={s.AdditionalMovieInfo}>
      <NavLink
        to={{
          pathname: `${url}/cast`,
          state: { from: location },
        }}
        className={s.linkCast}
        activeClassName={s.linkCastActive}
      >
        Cast
      </NavLink>

      <NavLink
        to={{
          pathname: `${url}/reviews`,
          state: { from: location },
        }}
        className={s.linkCast}
        activeClassName={s.linkCastActive}
      >
        Reviews
      </NavLink>
    </div>
  );
};

AdditionalMovieInfo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default AdditionalMovieInfo;
