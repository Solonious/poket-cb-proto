import React, { Component } from 'react';
import Footer from './Footer';

import { Link } from 'react-router';

import cooking from '../img/cooking.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={cooking} className="App-logo" alt="logo" />
          <Link to="/"><h2>Poket  COOKBOOK</h2></Link>
        </div>
        {this.props.data.children}
        <Footer/>
      </div>
    );
  }
}

const Main = (props) => (
    <MuiThemeProvider>
        <App data={props}/>
    </MuiThemeProvider>
);

export default Main;
