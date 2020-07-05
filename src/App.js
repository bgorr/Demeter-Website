import React from 'react';
import logo from './demeter_bottle.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We gon brew some whiskey in SPACE, y'all
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/lewis-c-jones/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lewis Jones
        </a>
      </header>
    </div>
  );
}

export default App;
