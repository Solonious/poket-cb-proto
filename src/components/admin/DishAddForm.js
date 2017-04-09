import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { Field, reduxForm } from 'redux-form/immutable';

import styles from '../styles';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
		{...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
		{...custom}/>
);

class DishAddForm extends React.PureComponent{
    render() {
        const { handleSubmit, categories, uploadPicture, picture } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Card style={styles.card}>
                    <h3>Add Dish</h3>
                    <RaisedButton
                        secondary={true}
                        style={styles.flatBtn}
                        label="Upload"
                        labelPosition="before"
                        icon={<KeyboardArrowDown/>}
                        onClick={()=> uploadPicture()}
                    /><br/>
                    <div className="form-group text-center">
                        <img id='picture' style={styles.uploadedPicture} src={picture} alt=""/>
                    </div>
                    <Field
                        name="dishName"
                        component={renderTextField}
                        label="Dish name"
                    />
                    <Field
                      name="category"
                      component={renderSelectField}
                      label="Category"
                    >
			                {categories.map((item, i) => (
                        <MenuItem
                          key={i}
                          value={item.name}
                          primaryText={item.name} />
			                ))}
                    </Field>
                    <br />
                    <Field
                        name="description"
                        component={renderTextField}
                        label="Description"
                        multiLine={true}
                        rows={2}
                    /><br />
                    <RaisedButton label="Add" type="submit" secondary={true} style={styles.flatBtn} />
                </Card>
            </form>
        );
    }
}

export default reduxForm({
    form: 'dishForm'
})(DishAddForm);