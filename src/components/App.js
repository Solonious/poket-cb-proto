import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as categoriesActionCreators from '../actions/categories';
import * as dishesActionCreators from '../actions/dishes';
import * as filestackActionCreators from '../actions/filestack';
import * as authActionCreators from '../actions/auth';
import Footer from './app/Footer';
import { Link } from 'react-router';

import { toastr } from 'react-redux-toastr';

import LoginMenu from './auth/LoginMenu';

import chef from '../../public/img/icons/chef.svg';
import './App.css';

import styles from './styles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.deleteDish = this.deleteDish.bind(this);
    this.removePicture = this.removePicture.bind(this);
	  this.logout = this.logout.bind(this);
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
	logout () {
		this.props.authActions.logoutUser();
		toastr.success('Poket cookbook', 'Your are now logged out');
		localStorage.removeItem('token');
	}
  render() {
  	const { userName } = this.props;
    return (
      <div style={styles.app}>
        <div style={styles.appHeader}>
	        <LoginMenu userName={userName} logout={this.logout} />
          <Link to="admin"><img src={chef} className="App-logo" alt="logo" /></Link>
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
		userName: state.getIn(['auth', 'name']),
	}
}

function mapDispatchToProps (dispatch) {
	return {
		categoriesActions: bindActionCreators(categoriesActionCreators, dispatch),
		dishesActions: bindActionCreators(dishesActionCreators, dispatch),
		filestackActions: bindActionCreators(filestackActionCreators, dispatch),
		authActions: bindActionCreators(authActionCreators, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);