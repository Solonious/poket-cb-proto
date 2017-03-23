import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as categoriesActionCreators from '../actions/categories';
import * as dishesActionCreators from '../actions/dishes';
import Footer from './app/Footer';
import { Link } from 'react-router';

import cooking from '../img/cooking.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCategory = this.deleteCategory.bind(this);
  }
  componentDidMount() {
    this.getCategories();
    this.getDishes();
  }
  getCategories() {
    this.props.categoriesActions.getCategories();
  }
  deleteCategory() {
      this.props.categoriesActions.deleteCategory()
  }
  getDishes() {
    this.props.dishesActions.getDishes();
  }
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

// We can read values from the state thanks to mapStateToProps
function mapStateToProps (state) {
	return { // We get all the games to list in the page
		categories: state.getIn(['categories', 'list'], Immutable.List()).toJS(),
		dishes: state.getIn(['dishes', 'list'], Immutable.List()).toJS(),
	}
}
// We can dispatch actions to the reducer and sagas
function mapDispatchToProps (dispatch) {
	return {
		categoriesActions: bindActionCreators(categoriesActionCreators, dispatch),
		dishesActions: bindActionCreators(dishesActionCreators, dispatch),
	};
}
// Finally we export the connected GamesContainer
export default connect(mapStateToProps, mapDispatchToProps)(App);