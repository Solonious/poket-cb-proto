import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { rightIconMenu } from './IconBtnGroup';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router';

import { categoryFetchData } from '../libs/helpers';



const styles = {
	root: {
		fontFamily: 'Glamour',
	},
	list: {
		width: 400,
		height: 400,
		margin: '0 auto'
	},
};

class AdminCategory extends React.Component{
	constructor() {
		super();
		this.state = {
			data:[],
		}
	}
	componentDidMount() {
		categoryFetchData().then(data => {
			this.setState({
				data,
			});
		});
	}
	render() {
		return (
			<div>
				<div style={styles.root}>
					<Link to="admin"><h3>Adminka</h3></Link>
					<List style={styles.list}>
						{this.state.data.map((data) => (
							<ListItem key={data.id} primaryText={`${data.name}`} rightIconButton={rightIconMenu}/>
						))}
					</List>
				</div>
				<RaisedButton label="Add" secondary={true} style={styles.btn} />
			</div>

		)
	}
}

export default AdminCategory;