import React from 'react';
import logo from "./demeter_logo.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" alt="logo">
        <img src={logo} className="App-logo"/>
        <p>
          Join us as we define the new frontier in consumer space!
        </p>
        <a
          className="App-link"
          href="mailto:contact@demeterspace.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
