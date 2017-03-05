import React from 'react';
import Footer from './Footer';

import { Link } from 'react-router';

import cooking from '../img/cooking.svg';
import './App.css';

class App extends React.Component {

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

export default App;
