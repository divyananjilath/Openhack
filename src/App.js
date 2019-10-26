import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// pages
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <p>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        </p>
        {/* 
            Add your routes here
            the first matched route will be used
        */}
        <Switch>

          <Route path="/login" exact >
            <Login />
          </Route>

          <Route path="/" component="">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
