import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
	card: {
		width: '100%',
		maxWidth: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
};

class addCategory extends React.Component{
	render() {
		return (
			<Card style={styles.card}>
				<h3>Add category</h3>
			</Card>
		);
	}
}

export default addCategory;