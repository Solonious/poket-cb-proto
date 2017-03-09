import React from 'react';
// import { CategoryForm } from '../components';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { hashHistory } from 'react-router';

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

class AddCategoryContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			src: ''
		};

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeSrc = this.handleChangeSrc.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.formClear = this.formClear.bind(this)
	}

	handleChangeName(event) {
		this.setState({name: event.target.value
		});
	}
	handleChangeSrc(event) {
		this.setState({
			src: event.target.value
		});
	}

	handleSubmit(event) {
		const data = {
			name: this.state.name,
			src: this.state.src
		}
		fetch('http://localhost:8080/category', {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'POST',
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data.message);
				this.formClear();
				hashHistory.push('/admin/category');
			});
	}
	formClear() {
		this.setState({
			name: '',
			src: ''
		})

	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<Card style={styles.card}>
				<h3>Add category</h3>
				<TextField
					value={this.state.name}
					floatingLabelText="Category Name"
					onChange={this.handleChangeName}
				/><br />
				<TextField
					value={this.state.src}
					floatingLabelText="Image src"
					onChange={this.handleChangeSrc}
				/><br />
				<RaisedButton label="Add" type="submit" secondary={true} style={styles.btn} />
			</Card>
			</form>
		);
	}
}

export default AddCategoryContainer;