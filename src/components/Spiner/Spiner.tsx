import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spiner.module.css';

const Spiner = () => {
  return (
    <div className={s.Loader}>
      <Loader type="TailSpin" color="#00BFFF" />
    </div>
  )
};

export default Spiner;
