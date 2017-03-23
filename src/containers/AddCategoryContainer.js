import React from 'react';
import { CategoryAddForm } from '../components';

class AddCategoryContainer extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		name: '',
	// 		src: ''
	// 	};
	//
	// 	this.handleChangeName = this.handleChangeName.bind(this);
	// 	this.handleChangeSrc = this.handleChangeSrc.bind(this);
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// 	this.formClear = this.formClear.bind(this)
	// }
	//
	// handleChangeName(event) {
	// 	this.setState({name: event.target.value
	// 	});
	// }
	// handleChangeSrc(event) {
	// 	this.setState({
	// 		src: event.target.value
	// 	});
	// }
	//
	// handleSubmit() {
	// 	const data = {
	// 		name: this.state.name,
	// 		src: this.state.src
	// 	}
	//
	// 	fetch('http://localhost:8080/category', {
	// 		headers: new Headers({
	// 			'Content-Type': 'application/json'
	// 		}),
	// 		method: 'POST',
	// 		body: JSON.stringify(data)
	// 	})
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			console.log(data.message);
	// 			this.formClear();
	// 			hashHistory.push('/admin/category');
	// 		});
	// }
	// formClear() {
	// 	this.setState({
	// 		name: '',
	// 		src: ''
	// 	})
	//
	// }
	render() {
		const { addCategoryAction } = this.props;
		return (
			<CategoryAddForm
				addCategory={addCategoryAction}
			/>
		);
	}
}

export default AddCategoryContainer;