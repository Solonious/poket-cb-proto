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

class CategoryAddForm extends React.PureComponent{
	render() {
		console.log(this.props);
		const { handleSubmit, handleChangeName, handleChangeSrc, data } = this.props;
		return (
			<form onSubmit={()=>{handleSubmit()}}>
			<Card style={styles.card}>
				<h3>Add category</h3>
					<TextField
						value={data.name}
						floatingLabelText="Category Name"
						onChange={handleChangeName}
					/><br />
					<TextField
						value={data.src}
						floatingLabelText="Image src"
						onChange={handleChangeSrc}
					/><br />
					<RaisedButton label="Add" type="submit" secondary={true} style={styles.btn} />
			</Card>
			</form>
		);
	}
}

export default CategoryAddForm;