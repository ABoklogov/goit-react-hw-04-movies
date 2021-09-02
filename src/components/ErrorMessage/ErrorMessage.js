import s from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => {
  return <p className={s.errorMessage}>{`${error}`}</p>;
};

export default ErrorMessage;
