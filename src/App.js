import './App.css';
import Header from './Header'
import Home from './Home'
import State from './State';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import District from './District';
import Login from './Login';


function App() {
  return (
    <Router>
    <div className="app">
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/state">
            <Header />
            <State />
          </Route>
          <Route path="/district">
            <Header />
            <District />
          </Route>
          <Route path = "/">
            <Header />
            <Home />
          </Route>
          {/* District */}

          {/* Child */}
        </Switch>
    </div>

    </Router>
  );
}

export default App;
