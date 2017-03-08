import React from 'react';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router';

const styles = {
	root: {
		fontFamily: 'Glamour',
	},
	list: {
		width: 400,
		height: 350,
		margin: '0 auto'
	}
};

class AdminList extends React.Component {
	render() {
		return (
			<div>
				<div style={styles.root}>
					<Link to="admin"><h3>Adminka</h3></Link>
					<List style={styles.list}>
						<Link key={0} to="/admin/category"><ListItem primaryText="Category"/></Link>
						<Link key={1} to="/admin/dishes"><ListItem primaryText="Dishes"/></Link>
					</List>
				</div>
				<RaisedButton label="Add" secondary={true} style={styles.btn} />
			</div>
		)
	}
}

export default AdminList;