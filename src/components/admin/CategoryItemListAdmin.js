import React from 'react';
import '../App.css';

import styles from '../styles';

class CategoryItemListAdmin extends React.PureComponent {
	render() {
		const { _id, name, deleteCategory } = this.props;
		return (
				<li className="Admin-item-list" style={styles.root}>
					{`${name}`}
					<button
						className="Delete-btn"
						style={styles.deleteBtn}
						onClick={() => {
							deleteCategory(_id)
						}}
					>
						&times;
					</button>
				</li>
		)
	}
}

export default CategoryItemListAdmin;