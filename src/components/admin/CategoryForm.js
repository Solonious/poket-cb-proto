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

class CategoryForm extends React.PureComponent{

	render() {
		return (
			<Card style={styles.card}>
				<h3>Add category</h3>
					<TextField
						floatingLabelText="Category Name"
						onChange={this.props.handleChangeName}
					/><br />
					<TextField
						value={this.props.data.src}
						floatingLabelText="Image src"
						onChange={this.props.handleChangeSrc}
					/><br />
					<RaisedButton label="Add" onSubmit={this.props.handleSubmit} secondary={true} style={styles.btn} />
			</Card>
		);
	}
}

export default CategoryForm;