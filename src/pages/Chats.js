import { ChatEngine } from 'react-chat-engine';

import Navbar from 'components/Layout/Navbar';

const Chats = () => {
  return (
    <div>
      <Navbar />
      <ChatEngine
        height="100vh"
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
