import firebase from 'firebase/app';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

import styles from 'styles/Login.module.css';
import { auth } from 'adapters/firebase';

const LoginCard = () => {
  return (
    <div className={styles.card}>
      <button
        onClick={() =>
          auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        }
        className={styles.btn}
      >
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
