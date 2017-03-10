import React from 'react';
// import { IconBtnDelete } from './IconBtnGroup';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import { CategoryListManager } from '../components';

import { Link, hashHistory } from 'react-router';
import { categoryFetchData } from '../libs/helpers';

const styles = {
	card: {
		fontFamily: 'Glamour',
		width: '100%',
		maxWidth: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
};

class CategoryContainer extends React.Component{
	constructor() {
		super();
		this.state = {
			categories:[],
		}
		this.deleteCategory = this.deleteCategory.bind(this)
	}
	componentDidMount() {
		categoryFetchData().then(categories => {
			this.setState({
				categories,
			});
		});
	}
	deleteCategory(id) {
		fetch(`http://localhost:8080/category/${id}`, {
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(response => {
				// The game is also removed from the state thanks to the filter function
				this.setState({ categories: this.state.categories.filter(category => category._id !== id) });
				console.log(response.message);
				// hashHistory.push('/admin/category');
			});
	}
	render() {
		const { categories } = this.state;
		return (
			<div>
				<Card style={styles.card}>
					<Link to="admin"><h3>Adminka</h3></Link>
									<CategoryListManager
										categories={categories}
									  deleteCategory={this.deleteCategory}
									/>
				</Card>
				<Link to="addcat">
					<RaisedButton label="Add" secondary={true} style={styles.btn} />
				</Link>
			</div>

		)
	}
}

export default CategoryContainer;