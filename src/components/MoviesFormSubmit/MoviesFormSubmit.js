import s from './MoviesFormSubmit.module.css';

const MoviesFormSubmit = ({ submit, handleChenge, movie }) => {
  return (
    <form onSubmit={submit} className={s.formMovie}>
      <input
        type="text"
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

export default MoviesFormSubmit;
