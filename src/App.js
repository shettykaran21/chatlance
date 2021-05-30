import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
