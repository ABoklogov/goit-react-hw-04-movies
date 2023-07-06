import s from './ErrorMessage.module.css';

interface Props {
  error: string;
};

const ErrorMessage = ({ error }: Props) => {
  return <p className={s.errorMessage}>{`${error}`}</p>;
};

export default ErrorMessage;
