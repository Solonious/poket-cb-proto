import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const styles = {
	card: {
		width: '100%',
		maxWidth: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
};

class SingleDish extends React.PureComponent {
	render() {
		const { dishes } = this.props;
		const { catId, dishId } = this.props.params;
		const i = dishes.findIndex((dish) => dish._id === dishId);
		const dish = dishes[i];
		return (
			<Card style={styles.card}>
				<CardMedia
					overlay={
						<CardTitle title={dish.dishName} subtitle={dish.category}/>}
				>
					<img
						src={dish.srcImage}
						alt=""/>
				</CardMedia>
				<CardTitle title={dish.dishName} subtitle={dish.category}/>
				<CardText>{dish.description}</CardText>
				<CardActions>
					<Link to={`/${catId}/dishes`}>
						<FlatButton label="Return"/>
					</Link>
				</CardActions>
			</Card>
		);
	}
}

export default SingleDish;