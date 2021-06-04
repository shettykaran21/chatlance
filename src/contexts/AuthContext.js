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
      if (user) {
        history.push('/chats');
      }
    });
  }, [user, history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
      {isLoading && 'Loading...'}
    </AuthContext.Provider>
  );
};
