import React from 'react';
import { Link } from 'react-router';
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

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField floatingLabelText={label}
	           errorText={touched && error}
	           {...input}
	           {...custom}
	/>
);

class Signup extends React.PureComponent {
	register () {
		// dispatch action to the redux-saga
		this.props.authActions.signupUser(this.props.location.query.next || '/');
	}
	render () {
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
					<RaisedButton label="Add" secondary={true} style={styles.btn} onClick={() => this.register()}/>
					<Link to='/welcome'>
						<RaisedButton label="Back" primary={true} style={styles.btn} />
					</Link>
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

export default reduxForm({ form: 'signup' })(connect(null, mapDispatchToProps)(Signup));
