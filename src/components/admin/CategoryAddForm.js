import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form/immutable';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

import styles from '../styles';

// const validate = values => {
//     const errors = {};
//     const requiredFields = [ 'name',  'src' ];
//     requiredFields.forEach(field => {
//         if (!values[ field ]) {
//             errors[ field ] = 'Required'
//         }
//     });
//     return errors
// };

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField floatingLabelText={label}
			   errorText={touched && error}
               {...input}
               {...custom}
	/>
);

class CategoryAddForm extends React.PureComponent{
	render() {
		const { handleSubmit, uploadPicture, picture } = this.props;
        return (
			<form onSubmit={handleSubmit}>
				<Card style={styles.card}>
					<h3>Add category</h3>
					<div>
						<Field
							name="name"
							component={renderTextField}
							label="Category Name"
						/>
					</div>
					<div>
						<RaisedButton
							secondary={true}
							style={styles.flatBtn}
							label="Upload"
							labelPosition="before"
							icon={<KeyboardArrowDown/>}
							onClick={()=> {
								uploadPicture()
							}}
						/><br/>
						<div>
							<img id="picture" style={styles.uploadedPicture} src={picture} alt=""/>
						</div>
					</div>
					<RaisedButton label="Add" type="submit" secondary={true} style={styles.flatBtn} />
				</Card>
			</form>
        );
	}
}

export default reduxForm({
	form: 'categoryForm',
	// validate,
})(CategoryAddForm);