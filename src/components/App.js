import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as categoriesActionCreators from '../actions/categories';
import * as dishesActionCreators from '../actions/dishes';
import * as filestackActionCreators from '../actions/filestack';
import Footer from './app/Footer';
import { Link } from 'react-router';

import cooking from '../img/cooking.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.deleteDish = this.deleteDish.bind(this);
    this.removePicture = this.removePicture.bind(this);
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
  deleteDish() {
      this.props.dishesActions.deleteDish();
  }
  removePicture() {
  	this.props.filestackActions.removePicture();
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

function mapStateToProps (state) {
	return {
		categories: state.getIn(['categories', 'list'], Immutable.List()).toJS(),
		dishes: state.getIn(['dishes', 'list'], Immutable.List()).toJS(),
	}
}

function mapDispatchToProps (dispatch) {
	return {
		categoriesActions: bindActionCreators(categoriesActionCreators, dispatch),
		dishesActions: bindActionCreators(dishesActionCreators, dispatch),
		filestackActions: bindActionCreators(filestackActionCreators, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);