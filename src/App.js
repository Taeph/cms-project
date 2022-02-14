import './App.css';
import Navbar from './component/Navbar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>          
          <Route path="/news">
            <h1>news</h1>
          </Route>
          <Route path="/boards">
            <h1>boards</h1>
          </Route>
          <Route path="/videos">
            <h1>videos</h1>
          </Route>
          <Route path="/facility">
            <h1>facility</h1>
          </Route>
          <Route path="/users">
            <h1>users</h1>
          </Route>
          <Route path="/" exact>
            <h1>home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
