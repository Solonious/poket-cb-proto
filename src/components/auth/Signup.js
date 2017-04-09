import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as authActionCreators from '../../actions/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from '../styles';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField floatingLabelText={label}
	           errorText={touched && error}
	           {...input}
	           {...custom}
	/>
);

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

class Signup extends React.PureComponent {
	register () {
		// dispatch action to the redux-saga
		this.props.authActions.signupUser(this.props.location.query.next || '/');
	}
	render () {
		const { pristine, submitting, reset } = this.props;
		return (
			<Card style={styles.card}>
				<form onSubmit={this.props.handleSubmit}>
					<h3>Sign Up</h3>
					<div>
						<Field
							name="email"
							component={renderTextField}
							label="Email"
						  type="email"
						/>
					</div>
					<div>
						<Field
							name="name"
							component={renderTextField}
							label="Name"
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
					<RaisedButton
						label="Add user"
						disabled={pristine || submitting}
						secondary={true}
						style={styles.flatBtn}
						onClick={() => this.register()}
					/>
					<RaisedButton
						label="Clear"
						disabled={pristine || submitting}
						primary={true}
						style={styles.flatBtn}
						onClick={reset}
					/>
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
	form: 'signup',
	validate,
})(connect(null, mapDispatchToProps)(Signup));
