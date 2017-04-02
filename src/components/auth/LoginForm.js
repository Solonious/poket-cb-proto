import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as authActionCreators from '../../actions/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = {
	card: {
		width: '100%',
		maxWidth: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
	btn: {
		marginTop: 50
	}
};

const validate = values => {
	const errors = {};
	const requiredFields = ['name', 'email', 'password'];
	requiredFields.forEach(field => {
		if (!values[ field ]) {
			errors[ field ] = 'Required'
		}
	});
	if (!values.get('email')) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
		errors.email = 'Invalid email address'
	}
	return errors
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField floatingLabelText={label}
	           errorText={touched && error}
	           {...input}
	           {...custom}
	/>
);

class LoginForm extends React.PureComponent {
	login () {
		// dispatch action to the redux-saga
		this.props.authActions.loginUser(this.props.location.query.next || '/');
	}
	render () {
		const { pristine, reset, submitting } = this.props;
		return (
			<Card style={styles.card}>
				<form>
					<h3>Login</h3>
					<div>
						<Field
							name="name"
							component={renderTextField}
							label="Name"
						/>
					</div>
					<div>
						<Field
							name="email"
							component={renderTextField}
							label="Email"
						/>
					</div>
					<div>
						<Field
							name="password"
							component={renderTextField}
							label="Password"
							type="password"
						/>
					</div>
					<RaisedButton label="Log in" disabled={pristine || submitting} secondary={true} style={styles.btn} onClick={() => this.login()}/>
					<RaisedButton label="Clear" disabled={pristine || submitting} primary={true} style={styles.btn} type="reset" onClick={reset}/>
				</form>
			</Card>
		);
	}
}

function mapDispatchToProps (dispatch) {
	return {
		authActions: bindActionCreators(authActionCreators, dispatch)
	};
}

export default reduxForm({
	form: 'login',
	validate
})(connect(null, mapDispatchToProps)(LoginForm));
