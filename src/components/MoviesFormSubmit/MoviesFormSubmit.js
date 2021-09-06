import s from './MoviesFormSubmit.module.css';
import PropTypes from 'prop-types';

const MoviesFormSubmit = ({ submit, handleChenge, movie }) => {
  return (
    <form onSubmit={submit} className={s.formMovie}>
      <input
        type="input"
        value={movie}
        onChange={handleChenge}
        required
        placeholder="movie title"
        className={s.inputMovie}
      />
      <button className={s.buttonMovie}>Search</button>
    </form>
  );
};

MoviesFormSubmit.propTypes = {
  submit: PropTypes.func.isRequired,
  handleChenge: PropTypes.func.isRequired,
  movie: PropTypes.string,
};
export default MoviesFormSubmit;
