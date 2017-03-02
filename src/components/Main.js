import React, { Component } from 'react';
import Footer from './Footer';

import cooking from '../img/cooking.svg';
import './App.css';

import Home from './Home';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={cooking} className="App-logo" alt="logo" />
          <h2>Poket  COOKBOOK</h2>
        </div>
        <Home />
        <Footer/>
      </div>
    );
  }
}

const Main = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

export default Main;
