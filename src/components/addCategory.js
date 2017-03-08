import React from 'react';
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

class addCategory extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			src: ''
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSrcChange = this.handleSrcChange.bind(this);
		this.handleSubmit = this.handleSrcChange.bind(this);
	}
	handleNameChange(e) {
		this.setState({name: e.target.value})
	}
	handleSrcChange(e) {
		this.setState({src: e.target.value});
	}
	handleSubmit(e) {
		e.preventDefault();

		var name = this.state.name;
		var src = this.state.src;

		if(!name || !src) return;
		fetch('http://localhost:8080/category', {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'POST',
			body: JSON.stringify({name, src})
		})
			.then(res => res.json())
			.then(data => {
				console.log(data.message);
				hashHistory.push('/category')
			});
		//TODO: send query
		console.log(this.state);
		this.setState({name: '', src: ''})
	}
	render() {
		return (
			<Card style={styles.card}>
				<h3>Add category</h3>
				<form onSubmit={this.handleSubmit}>
					<TextField
						floatingLabelText="Category Name"
						value={this.state.name}
						onChange={this.handleNameChange}
					/><br />
					<TextField
						floatingLabelText="Image src"
						value={this.state.src}
						onChange={this.handleSrcChange}
					/><br />
					<RaisedButton type="submit" label="Add" secondary={true} style={styles.btn} />
				</form>
			</Card>

		);
	}
}

export default addCategory;