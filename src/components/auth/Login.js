import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form/immutable';
// import * as authActionCreators from '../actions/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import LoginForm from '../../components';

class Login extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		open: false
	// 	}
	// }
	// handleOpen = () => {
	// 	this.setState({open: true});
	// };
	//
	// handleClose = () => {
	// 	this.setState({open: false});
	// };
	// login() {
	// 	// dispatch action to the redux-saga
	// 	// this.props.authActions.loginUser(this.props.location.query.next || '/home');
	// }

	render() {
		// const {picture, uploadPicture} = this.props;
		// const actions = [
		// 	<FlatButton
		// 		label="Cancel"
		// 		primary={true}
		// 		onTouchTap={() => this.handleClose()}
		// 	/>,
		// 	<FlatButton
		// 		label="Submit"
		// 		primary={true}
		// 		keyboardFocused={true}
		// 		onTouchTap={() => this.handleClose()}
		// 	/>,
		// ];
		return (
			<div>
				<h1>Hello</h1>
			</div>
		);
	}
}

// function mapDispatchToProps (dispatch) {
// 	return {
// 		authActions: bindActionCreators(authActionCreators, dispatch)
// 	};
// }

// export default reduxForm({ form: 'login' })
// (connect(null, mapDispatchToProps)
// (Login);
// );

export default Login;