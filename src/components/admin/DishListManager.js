import React from 'react';
import { List } from 'material-ui/List';
import { DishItemListAdmin } from '../index';

import styles from '../styles';

class DishListManager extends React.PureComponent {
    render() {
        const { dishes, deleteDish, removePicture } = this.props;
        return (
            <List style={styles.adminlist}>
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