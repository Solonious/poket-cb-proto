import React from 'react';
import { Link } from 'react-router';

import IconButton from 'material-ui/IconButton';
import FingerPrint from 'material-ui/svg-icons/action/fingerprint';
import Face from 'material-ui/svg-icons/action/face';
import { red700, green700 } from 'material-ui/styles/colors';

import userAuthenticated from '../../utils/authWrapper';

const styles = {
	menu: {
		float: 'right',
		position: 'absolute',
		top: 0,
		right: 0,
	},
	nameBtn: {
		float: 'left',
		margin: '18px 0',
		fontSize: '0.8rem'
	},
	logOut: {
		color: 'green'
	}
};

class LoginMenu extends React.PureComponent {
	render () {
		const { userName, logout } = this.props;
		return (
			<div style={styles.menu}>
				<div style={styles.nameBtn}>{userName}</div>
						<IconButton
							onClick={logout}>
							<Face color={green700}/>
						</IconButton>
			</div>
		);
	}
}
/*
 * Auth-wrapper options
 */
const options = {
	authSelector: state => state.get('auth'),
	predicate: auth => auth.get('isAuthenticated'),
	wrapperDisplayName: 'authAddGame',
	/*
	 * This time the failure component are the buttons
	 * to authenticate the user or register a new one
	 */
	FailureComponent: () => {
		return (
			<div style={styles.menu}>
				<Link to="login" >
					<IconButton>
						<FingerPrint/>
					</IconButton>
				</Link>
				<Link to="signup" >
					<IconButton>
						<Face color={red700}/>
					</IconButton>
				</Link>
			</div>
		);
	}
};

// We export it
export default userAuthenticated(options)(LoginMenu);