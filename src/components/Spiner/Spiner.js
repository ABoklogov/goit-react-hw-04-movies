import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spiner.module.css';

const Spiner = () => {
  return <Loader className={s.Loader} type="TailSpin" color="#00BFFF" />;
};

export default Spiner;
