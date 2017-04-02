import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import { CategoryListManager } from '../components';

import { Link } from 'react-router';

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

class AdminCategoryContainer extends React.Component{
	render() {
		const { categories } = this.props;
		const { deleteCategory } = this.props.categoriesActions;
		return (
			<div>
				<Card style={styles.card}>
					<Link to="admin"><h3>Adminka</h3></Link>
									<CategoryListManager
										categories={categories}
									  deleteCategory={deleteCategory}
									/>
				</Card>
				<Link to="addcat">
					<RaisedButton label="Add" secondary={true} style={styles.btn} />
				</Link>
			</div>

		)
	}
}

export default AdminCategoryContainer;