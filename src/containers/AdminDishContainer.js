import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import { DishListManager } from '../components';

import { Link } from 'react-router';

const styles = {
    card: {
        fontFamily: 'Glamour',
        width: '100%',
        maxWidth: 400,
        height: 450,
        overflowY: 'auto',
        margin: '0 auto',
    },
};

class AdminDishContainer extends React.Component{
    render() {
        const { dishes } = this.props;
        const { deleteDish } = this.props.dishesActions;
        const { removePicture } = this.props.filestackActions;
        return (
            <div>
                <Card style={styles.card}>
                        <Link to="admin"><h3>Adminka</h3></Link>
                        <DishListManager
                            dishes={dishes}
                            deleteDish={deleteDish}
                            removePicture={removePicture}
                        />
                </Card>
                <Link to="adddish">
                    <RaisedButton label="Add" secondary={true} style={styles.btn} />
                </Link>
            </div>
        )
    }
}

export default AdminDishContainer;