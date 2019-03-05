import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './portfolio/portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <Portfolio />
        <footer className="App-footer">
          <ul>
            <li>Family</li>
            <li>Hobbies</li>
            <li>LinkedIn</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
