import React from 'react';
import '../App.css';

import styles from '../styles';

class DishItemListAdmin extends React.PureComponent {
    render() {
        const {
        	_id,
	        dishName,
	        deleteDish,
	        // removePicture,
	        // srcImg
        } = this.props;
        return (
            <li className="Admin-item-list" style={styles.root}>
                {`${dishName}`}
                <button
                    className="Delete-btn"
                    style={styles.deleteBtn}
                    onClick={() => deleteDish(_id)}
                >
                    &times;
                </button>
            </li>
        )
    }
}

export default DishItemListAdmin;