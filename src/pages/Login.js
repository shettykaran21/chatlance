import LoginCard from 'components/Login/LoginCard';
import styles from 'styles/Login.module.css';

const Login = () => {
  return (
    <div className={styles.login}>
      <h1 className={styles.heading}>Chatlance</h1>
      <LoginCard />
    </div>
  );
};

export default Login;
