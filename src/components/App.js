import React from 'react';
import Footer from './app/Footer';
import { Link } from 'react-router';

import cooking from '../img/cooking.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="admin"><img src={cooking} className="App-logo" alt="logo" /></Link>
          <Link to="/"><h2>Poket  COOKBOOK</h2></Link>
        </div>
	      {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
        <Footer/>
      </div>
    );
  }
}

export default App;
