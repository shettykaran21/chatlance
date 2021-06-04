import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ChatEngine } from 'react-chat-engine';

import Navbar from 'components/Layout/Navbar';
import useAuth from 'hooks/useAuth';
import styles from 'styles/Chats.module.css';
import 'styles/Chats.css';

const Chats = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const getImageFile = async (url) => {
    const response = await axios.get(url);
    const data = await response.blob();

    return new File([data], 'user.jpg', { type: 'image/jpeg' });
  };

  const getUserData = async () => {
    try {
      await axios.get('https://api.chatengine.io/users/me', {
        headers: {
          'project-id': process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
          'user-name': user.email,
          'user-secret': user.uid,
        },
      });
      setIsLoading(false);
    } catch (err) {
      let formData = new FormData();
      formData.append('email', user.email);
      formData.append('username', user.email);
      formData.append('secret', user.uid);

      getImageFile(user.photoURL).then((avatar) => {
        formData.append('avatar', avatar, avatar.name);

        axios
          .post('https://api.chatengine.io/users/', formData, {
            headers: {
              'private-key': process.env.REACT_APP_CHAT_ENGINE_KEY,
            },
          })
          .then(() => setIsLoading(false))
          .catch((err) => console.log(err));
      });
    }
  };

  useEffect(() => {
    if (!user) {
      history.push('/');
      return;
    }

    getUserData();
  });

  return (
    <>
      <Navbar />
      {isLoading || (!user && <div>Loading...</div>)}
      <div className={styles.chats}>
        <ChatEngine
          height="calc(100vh - 66px)"
          projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
          userName={user?.email}
          userSecret={user?.uid}
        />
      </div>
    </>
  );
};

export default Chats;
