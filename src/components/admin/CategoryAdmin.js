import React from 'react';

import { ListItem } from 'material-ui/List';

class CategoryAdmin extends React.PureComponent {
	render() {
		const { id, name, deleteCategory } = this.props;
		return (
			<ListItem>
					{`${name}`}
					<button  onClick={() => deleteCategory(id)} />
			</ListItem>
		)
	}
}

export default CategoryAdmin;