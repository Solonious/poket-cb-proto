import React from 'react';

import {List} from 'material-ui/List';
import { CategoryItemListAdmin } from '../index';

import styles from '../styles';

class CategoryListManager extends React.PureComponent {
	render() {
		const { categories, deleteCategory } = this.props;
		return (
			<List style={styles.adminList}>
				{categories.map((data) => (
						<CategoryItemListAdmin
							key={data._id}
							{...data}
						  deleteCategory={deleteCategory}
						/>
				))}
			</List>
		)
	}
}

export default CategoryListManager;
