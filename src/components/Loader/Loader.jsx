import { TailSpin } from 'react-loader-spinner';
import styles from './style.module.css';

const Loader = () => (
  <div className={styles.Loader}>
    <TailSpin />
  </div>
);

export default Loader;
