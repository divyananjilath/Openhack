import React from 'react';
import { BrowserRouter as Router,Link } from "react-router-dom";
  

function App() {
  return (
    <div className="App">
        <Link to="/">Home</Link>
        <p>
           Login page
        </p>
    </div>
  );
}

export default App;
