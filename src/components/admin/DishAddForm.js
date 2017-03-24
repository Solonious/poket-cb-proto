import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { Field, reduxForm } from 'redux-form/immutable';

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
        width: '100%',
        heigth: 'auto',
    }
};

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
        console.log(picture);
        return (
            <form onSubmit={handleSubmit}>
                <Card style={styles.card}>
                    <h3>Add Dish</h3>
                    <RaisedButton
                        secondary={true}
                        style={styles.btn}
                        label="Upload"
                        labelPosition="before"
                        icon={<KeyboardArrowDown/>}
                        onClick={()=> uploadPicture()}
                    /><br/>
                    <div className="form-group text-center">
                        <img style={styles.picture} id="picture" className="img-responsive img-upload" src={picture} />
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
                    <RaisedButton label="Add" type="submit" secondary={true} style={styles.btn} />
                </Card>
            </form>
        );
    }
}

export default reduxForm({
    form: 'dishForm'
})(DishAddForm);