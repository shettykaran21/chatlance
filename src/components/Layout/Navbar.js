import { auth } from 'adapters/firebase';
import { useHistory } from 'react-router';

import styles from 'styles/Navbar.module.css';
import { Button } from 'components/Button';

const Navbar = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();
    history.push('/');
  };

  return (
    <div className={styles.navbar}>
      <h2 className={styles.logo}>Chatlance</h2>
      <Button className={styles.logout} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
