import React from 'react';

import {List} from 'material-ui/List';
import { CategoryItemListAdmin } from '../index';

const styles = {
	list: {
		width: 400,
		height: 400,
		margin: '0 auto'
	},
}

class CategoryListManager extends React.PureComponent {
	render() {
		const { categories, deleteCategory } = this.props;
		return (
			<List style={styles.list}>
				{categories.map((data) => (
						<CategoryItemListAdmin
							key={data.id}
							{...data}
						  deleteCategory={deleteCategory}
						/>
				))}
			</List>
		)
	}
}

export default CategoryListManager;
