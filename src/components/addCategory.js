import React from 'react';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	card: {
		width: '100%',
		maxWidth: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
	btn: {
		marginTop: 50
	}
};

class addCategory extends React.Component{
	render() {
		return (
			<Card style={styles.card}>
				<h3>Add category</h3>
				<form action="" method="POST">
					<TextField
						floatingLabelText="Category Name"
					/><br />
					<TextField
						floatingLabelText="Image src"
					/><br />
					<RaisedButton type="submit" label="Add" secondary={true} style={styles.btn} />
				</form>
			</Card>

		);
	}
}

export default addCategory;