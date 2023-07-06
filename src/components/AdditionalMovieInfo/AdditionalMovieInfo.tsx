import { NavLink, useLocation } from 'react-router-dom';
import s from './AdditionalMovieInfo.module.css';

interface Props {
  url: string;
};

const AdditionalMovieInfo = ({ url }: Props) => {
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

export default AdditionalMovieInfo;
