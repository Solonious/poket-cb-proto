import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Field, reduxForm } from 'redux-form/immutable';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

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
	},
	picture: {
		display: 'none',
		width: '30%',
		height: 'auto',
		margin: '20px auto',
	}
};

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
							style={styles.btn}
							label="Upload"
							labelPosition="before"
							icon={<KeyboardArrowDown/>}
							onClick={()=> {
								uploadPicture()
							}}
						/><br/>
						<div>
							<img id="picture" style={styles.picture} src={picture} alt=""/>
						</div>
					</div>
					<RaisedButton label="Add" type="submit" secondary={true} style={styles.btn} />
				</Card>
			</form>
        );
	}
}

export default reduxForm({
	form: 'categoryForm',
	// validate,
})(CategoryAddForm);