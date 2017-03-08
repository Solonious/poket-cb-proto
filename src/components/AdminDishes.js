import React from 'react';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { rightIconMenu } from './IconBtnGroup';

import { Link } from 'react-router';

import { dishFetchData } from '../libs/helpers';
import { Card } from 'material-ui/Card';


const styles = {
	card: {
		fontFamily: 'Glamour',
		width: '100%',
		maxWidth: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
	list: {
		width: 400,
		height: 450,
		margin: '0 auto'
	},
	btn: {
		margin: 12
	}
};

class AdminDishes extends React.Component{
	constructor() {
		super();
		this.state = {
			data:[],
		}
	}
	componentDidMount() {
		const url = 'http://localhost:8080/category/dishes';
		dishFetchData(url).then(data => {
			this.setState({data: data});
		});
	}
	render() {
		return (
			<div>
				<Card style={styles.card}>
					<List style={styles.list}>
						<Link to="admin"><h3>Adminka</h3></Link>
						{this.state.data.map((data) => (
							<ListItem key={data._id} primaryText={`${data.dishName}`} rightIconButton={rightIconMenu}/>
						))}
					</List>
				</Card>
				<RaisedButton label="Add" secondary={true} style={styles.btn} />
			</div>

		)
	}
}

export default AdminDishes;