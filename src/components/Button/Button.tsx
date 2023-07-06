import s from './Button.module.css';

interface Props {
  onGoBack: () => void;
};

const Button = ({ onGoBack }: Props) => {
  return (
    <button type="button" className={s.Button} onClick={onGoBack}>
      Go back
    </button>
  );
};

export default Button;
