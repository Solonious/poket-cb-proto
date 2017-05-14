import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form/immutable';
import Send from 'material-ui/svg-icons/content/send';



import CommentEditor from './CommentEditor';

import styles from '../styles';

const TextEditor = ({ input }) => (
	<CommentEditor
		{...input}
	/>
);

class CommentAddForm extends React.PureComponent{
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
					<Field
						name="description"
						component={TextEditor}
					/>
					<RaisedButton
						label="Add"
						type="submit"
						secondary={true}
						icon={<Send/>}
						style={styles.flatBtn} />
			</form>
		);
	}
}

export default reduxForm({
	form: 'commentForm'
})(CommentAddForm);