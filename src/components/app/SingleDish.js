import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

import styles from '../styles';

import ReactHtmlParser from 'react-html-parser';

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
				<CardText style={styles.cardTitle}>{ReactHtmlParser(dish.description)}</CardText>
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