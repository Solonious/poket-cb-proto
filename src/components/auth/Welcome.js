import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FingerPrint from 'material-ui/svg-icons/action/fingerprint';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import { Link } from 'react-router';

const styles = {
	root: {
		width: '100%',
		maxWidth: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
	btnContainer: {
		width: '60%',
		margin: '0 auto'
}
};

class Welcome extends React.Component {
	render() {
		return (
			<div style={styles.root}>
				<Link to="login">
				<div style={styles.btnContainer}>
					<RaisedButton
						fullWidth={true}
						label="Login"
						labelPosition="before"
						secondary={true}
						icon={<PersonAdd />}
						style={styles.btn}
					/>
				</div></Link>
				<br/>
				<Link to="signup">
				<div style={styles.btnContainer}>
					<RaisedButton
						fullWidth={true}
						label="Sign In"
						labelPosition="before"
						primary={true}
						icon={<FingerPrint />}
						style={styles.btn}
					/>
				</div>
				</Link>
			</div>
		);
	}
}

export default Welcome;