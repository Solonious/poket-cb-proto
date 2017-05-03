import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form/immutable';
import Send from 'material-ui/svg-icons/content/send';
import Comments from './Comments';

import styles from '../styles';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField floatingLabelText={label}
	           errorText={touched && error}
	           {...input}
	           {...custom}
	/>
);

class AddComments extends React.PureComponent {
	render() {
		const { handleSubmit } = this.props;
		return (
				<form onSubmit={handleSubmit}>
					<Card style={styles.card}>
						<h4>Comments</h4>
						<Comments/>
							<div>
								<Field
									name="comment"
						      component={renderTextField}
						      label="Comment"
								/>
							</div>
						<div>
							<RaisedButton
								secondary={true}
								style={styles.flatBtn}
								label="Upload"
								labelPosition="before"
								icon={<Send/>}
								type="submit"
							/><br/>
						</div>
					</Card>
				</form>
		)
	}
}

export default reduxForm({
	form: 'commentForm'
})(AddComments);