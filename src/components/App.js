import React, { Component } from 'react';
import cooking from '../img/cooking.svg';
import './App.css';

import Home from './Home';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={cooking} className="App-logo" alt="logo" />
          <h2>Poket  COOKBOOK</h2>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
