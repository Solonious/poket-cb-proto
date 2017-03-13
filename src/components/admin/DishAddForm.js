import React from 'react';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { SelectFieldCustom } from '../../components';
import DropzoneDemo from '../../components/admin/UploadForm';

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

class DishAddForm extends React.PureComponent{
    render() {
        const {
            handleSubmit,
            handleChangeName,
            handleChangeSrc,
            handleChangeCategory,
            handleChangeDescription,
            data
        } = this.props;
        return (
            <form onSubmit={()=> {handleSubmit()}}>
                <Card style={styles.card}>
                    <h3>Add Dish</h3>
                    <DropzoneDemo/>
                    <TextField
                        value={data.name}
                        floatingLabelText="Dish Name"
                        onChange={handleChangeName}
                    /><br />
                    <TextField
                        value={data.src}
                        floatingLabelText="Image src"
                        onChange={handleChangeSrc}
                    /><br />
                    <SelectFieldCustom
                      items={data.categories}
                      value={data.category.index}
                      handleChangeCategory={handleChangeCategory}
                    />
                    <br />
                    <TextField
                        value={data.description}
                        floatingLabelText="Description"
                        multiLine={true}
                        rows={2}
                        onChange={handleChangeDescription}
                    /><br />
                    <RaisedButton label="Add" type="submit" secondary={true} style={styles.btn} />
                </Card>
            </form>
        );
    }
}

export default DishAddForm;