import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Chats from 'pages/Chats';
import { AuthProvider } from 'contexts/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
