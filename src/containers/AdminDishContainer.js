import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import { DishListManager } from '../components';

import { Link } from 'react-router';
// import { dishFetchData } from '../libs/helpers';


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
    // {/*constructor() {*/}
    //     super();
    //     this.getDishes = this.getDishes.bind(this)
    //     this.deleteDish = this.deleteDish.bind(this)
    // }
    // componentDidMount() {
    //     this.getDishes()
    // }
    // getDishes() {
    //     const url = 'http://localhost:8080/dishes';
    //     dishFetchData(url).then(dishes => {
    //         this.setState({
    //             dishes,
    //         });
    //     });
    // }
    // deleteDish(id) {
    //     fetch(`http://localhost:8080/dishes/${id}`, {
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //         }),
    //         method: 'DELETE',
    //     })
    //         .then(response => response.json())
    //         .then(response => {
    //             this.setState({ dishes: this.state.dishes.filter(dish => dish._id !== id) });
    //             console.log(response.message);
    //         });
    // }
    render() {
        const { dishes } = this.props;
        return (
            <div>
                <Card style={styles.card}>
                        <Link to="admin"><h3>Adminka</h3></Link>
                        <DishListManager
                            dishes={dishes}
                            deleteDish={this.deleteDish}
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