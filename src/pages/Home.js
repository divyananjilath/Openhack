import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function App() {
  return (
    <div className="App">
        <Link to="/login">Login</Link>
        <p>
            Home page
        </p>
    </div>
  );
}

export default App;
