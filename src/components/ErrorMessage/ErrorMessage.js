import s from './ErrorMessage.module.css';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  return <p className={s.errorMessage}>{`${error}`}</p>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};
export default ErrorMessage;
