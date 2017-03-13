import React from 'react';

class SimpleForm extends React.Component{
constructor(props) {
	super(props);

	this.hundleSubmit = this.hundleSubmit.bind(this);
}

hundleSubmit(e) {
	e.preventDefault();
	var form = document.getElementById("myForm");
	var formData = new FormData(form);
	fetch('http://localhost:8080/upload', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
			'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
		},
		body: formData
	});
}
	render () {
		return (
			<div>
				<form id="myForm" action="" onSubmit={this.hundleSubmit}>
					<input type="file" ref={(file)=> {this.fileInput = file}}/>
					<input type="submit" value="submit"/>
				</form>
			</div>
		);
	}
}

export default SimpleForm;