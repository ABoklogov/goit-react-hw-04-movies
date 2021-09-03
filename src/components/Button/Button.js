import s from './Button.module.css';

const Button = ({ onGoBack }) => {
  return (
    <button type="button" className={s.Button} onClick={onGoBack}>
      Go back
    </button>
  );
};

export default Button;
