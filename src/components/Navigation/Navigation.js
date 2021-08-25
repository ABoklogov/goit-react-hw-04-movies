import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <NavLink exact to="/" className={s.navItem} activeClassName={s.navActive}>
        Home
      </NavLink>

      <NavLink to="/movies" className={s.navItem} activeClassName={s.navActive}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
