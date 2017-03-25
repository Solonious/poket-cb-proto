import React from 'react';
import '../App.css';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '3rem',
        paddingRight: 30,
    },
    btn: {
        border: 0,
        background: 'transparent',
        fontSize: '1.2rem',
        color: 'red',
        cursor: 'pointer',
        alignItems: 'flex-end'
    }
};

class DishItemListAdmin extends React.PureComponent {
    render() {
        const { _id, dishName, deleteDish, removePicture, srcImage } = this.props;
        return (
            <li className="Admin-item-list" style={styles.root}>
                {`${dishName}`}
                <button
                    className="Delete-btn"
                    style={styles.btn}
                    onClick={() => deleteDish(_id)}
                >
                    &times;
                </button>
	            {/*<button*/}
		            {/*className="Delete-btn"*/}
	                    {/*style={styles.btn}*/}
	                    {/*onClick={()=> {*/}
	                    	{/*console.log(srcImage);*/}
		            {/*removePicture(srcImage);*/}
	            {/*}}*/}
	            {/*>&times;</button>*/}
            </li>
        )
    }
}

export default DishItemListAdmin;