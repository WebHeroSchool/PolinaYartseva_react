import React from 'react';
import logo from './logo.svg';
import './App.css';

const number = 35;
const logic = true;
const ternar = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'yellow',
          fontSize: 10
        }}>
          Hello, World!
        </p>
        <p>
          {number}
        </p>
        <p>
          {100 + 50}
        </p>
        <p>
          {logic && "It's true"}
        </p>
        <p>
          {ternar ? 'ternar is true' : 'ternat is false'}
        </p>
        <p>
          {undefined}
          {null}
          {true}
          {false}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
