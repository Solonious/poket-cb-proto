import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import InsertComment from 'material-ui/svg-icons/editor/insert-comment';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

import { Comments } from '../../components';

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
					<Comments comments={dish.comments}/>
					<Link to={`/${catId}/dishes`}>
						<FlatButton label="Return"/>
					</Link>
					<Link to={`/dishes/${dishId}/comments`}>
						<FlatButton
							icon={<InsertComment/>}
							label="show comments"/>
					</Link>
				</CardActions>
			</Card>
		);
	}
}

export default SingleDish;