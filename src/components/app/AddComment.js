import React from 'react';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form/immutable';


const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField floatingLabelText={label}
	           errorText={touched && error}
	           {...input}
	           {...custom}
	/>
);

class AddComments extends React.PureComponent {
	render() {
		return (
			<div>
				<form onsubmit={}>
					<h4>Add comment</h4>
					<div>
						<Field
							name="comment"
						  component={renderTextField}
						  label="Comment"
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: 'addCommentForm'
})(AddComments);