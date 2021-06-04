import { ChatEngine } from 'react-chat-engine';

import Navbar from 'components/Layout/Navbar';
import useAuth from 'hooks/useAuth';

const Chats = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <Navbar />
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
