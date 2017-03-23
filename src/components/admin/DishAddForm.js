import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Field, reduxForm } from 'redux-form/immutable';

import { SelectFieldCustom, ImageUpload } from '../../components';

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
    }
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

class DishAddForm extends React.PureComponent{
    render() {
        const { handleSubmit, categories } = this.props;

        return (
            <form onSubmit={handleSubmit()}>
                <Card style={styles.card}>
                    <h3>Add Dish</h3>
                    {/*<ImageUpload*/}
                        {/*data={data}*/}
                        {/*onImageDrop={onImageDrop}/>*/}
                    <Field
                        name="name"
                        component={renderTextField}
                        label="Dish name"
                    />
                    <SelectFieldCustom
                        categories={categories}
                    />
                    <br />
                    <Field
                        name="Description"
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