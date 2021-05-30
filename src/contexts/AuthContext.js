import { useState, useEffect, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from 'adapters/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
      user && history.push('/chats');
    });
  }, [user, history]);

  return (
    <AuthContext.Provider value={user}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
