import React from 'react';
import { List } from 'material-ui/List';
import { DishItemListAdmin } from '../index';

const styles = {
    list: {
        width: 400,
        height: 400,
        margin: '0 auto'
    },
};

class DishListManager extends React.PureComponent {
    render() {
        const { dishes, deleteDish, removePicture } = this.props;
        return (
            <List style={styles.list}>
                {dishes.map((data) => (
                    <DishItemListAdmin
                        key={data._id}
                        {...data}
                        deleteDish={deleteDish}
                        removePicture={removePicture}
                    />
                ))}
            </List>
        )
    }
}

export default DishListManager;