import React from 'react';
import ImageUpload from '../components/admin/ImageUpload';

class ImageUploadContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			file: '',
			imagePreviewUrl: ''
		}
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.uploadImage = this.uploadImage.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		// TODO: do something with -> this.state.file
		console.log('handle uploading-', this.state);
		this.uploadImage();
	}
	handleImageChange(e) {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		};

		reader.readAsDataURL(file)
	}
	uploadImage () {
		// This assumes the form's name is `myForm`
		var form = document.getElementById("myForm");
		console.log(form);
		var formData = new FormData(form);
		fetch('http://localhost:8080/upload', {
			method: 'POST',
			body: formData
		});
	}
	render() {
		return (
			<div>
					<ImageUpload
						data={this.state}
						handleImageChange={this.handleImageChange}
						handleSubmit={this.handleSubmit}
					/>
			</div>
		);
	}
}

export default ImageUploadContainer;