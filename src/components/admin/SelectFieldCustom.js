import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm } from 'redux-form';

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
	<SelectField
		floatingLabelText={label}
		errorText={touched && error}
        {...input}
		onChange={(event, index, value) => input.onChange(value)}
		children={children}
        {...custom}/>
);

class SelectFieldCustom extends React.PureComponent {
	render() {
		console.log(this.props);
		const { items, handleChangeCategory, value } = this.props;
		return (
			<div>
				<Field
					name="category"
					component={renderSelectField}
					label="Category"
				>
					{items.map((item, i) => (
						<MenuItem
							key={i}
							value={i}
							primaryText={item} />
					))}
				</Field>
				<br />
			</div>
		)
	}
}

export default SelectFieldCustom;