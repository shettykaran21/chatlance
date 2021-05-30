import { FaGoogle, FaFacebook } from 'react-icons/fa';

import styles from '../../styles/Login.module.css';

const LoginCard = () => {
  return (
    <div className={styles.card}>
      <button className={styles.btn}>
        <FaGoogle />
        <span>Sign In with Google</span>
      </button>
      <button className={styles.btn}>
        <FaFacebook />
        <span>Sign In with Facebook</span>
      </button>
    </div>
  );
};

export default LoginCard;
