import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from './Youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Youtube/>
      </div>
    );
  }
}

export default App;
