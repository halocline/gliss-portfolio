import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './portfolio/portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Matt Glissmann's Project Portfolio</h1>
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
