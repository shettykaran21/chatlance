import { auth } from 'adapters/firebase';
import { useHistory } from 'react-router';

import styles from 'styles/Navbar.module.css';

const Navbar = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();
    history.push('/');
  };

  return (
    <div>
      <div className={styles.logo}>Chatlance</div>
      <div className={styles.logout} onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
