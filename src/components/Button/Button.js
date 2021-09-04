import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onGoBack }) => {
  return (
    <button type="button" className={s.Button} onClick={onGoBack}>
      Go back
    </button>
  );
};

Button.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};
export default Button;
