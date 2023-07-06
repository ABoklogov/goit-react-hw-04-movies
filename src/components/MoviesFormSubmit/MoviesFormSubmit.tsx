import { FormEvent, ChangeEvent } from 'react';
import s from './MoviesFormSubmit.module.css';

interface Props {
  submit: (e: FormEvent<HTMLFormElement>) => void;
  handleChenge: (e: ChangeEvent<HTMLInputElement>) => void;
  movie: string;
}

const MoviesFormSubmit = ({ submit, handleChenge, movie }: Props) => {
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

export default MoviesFormSubmit;
