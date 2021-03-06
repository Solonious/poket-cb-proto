import React from 'react';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';

import { Link } from 'react-router';

import styles from '../styles'

class AdminList extends React.PureComponent {
	render() {
		return (
			<div>
				<Card style={styles.card}>
					<Link to="admin"><h3>Adminka</h3></Link>
					<List style={styles.adminlist}>
						<Link key={0} to="admin/category"><ListItem primaryText="Category"/></Link>
						<Link key={1} to="admin/dishes"><ListItem primaryText="Dishes"/></Link>
					</List>
				</Card>
				<RaisedButton label="Add" secondary={true} style={styles.btn} />
			</div>
		)
	}
}

export default AdminList;