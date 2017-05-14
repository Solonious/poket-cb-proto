import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import InsertComment from 'material-ui/svg-icons/editor/insert-comment';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

import { Comments } from '../../components';

import CustomCircularProgress from './CircularProgress';

import styles from '../styles';

import ReactHtmlParser from 'react-html-parser';

class SingleDish extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			commentBox: false
		};
		this.toggleCommentBox = this.toggleCommentBox.bind(this);
	}
	toggleCommentBox() {
		const { commentBox } = this.state;
		this.setState({
			commentBox: !commentBox
		})
	}
	render() {
		const { dishes } = this.props;
		const { catId, dishId } = this.props.params;
		const i = dishes.findIndex((dish) => dish._id === dishId);
		// const dish = !!~i ? dishes[i] : defaultJsonData;
		const dish = dishes[i]
		return (
			<Card style={styles.card}>
				{ dishes.length ?
					<div>
						<CardMedia overlay={<CardTitle title={dish.dishName} subtitle={dish.category}/>}>
							<img src={dish.srcImage} alt=""/>
						</CardMedia>
						<CardTitle title={dish.dishName} subtitle={dish.category}/>
						<CardText style={styles.cardTitle}>{ReactHtmlParser(dish.description)}</CardText>
						<CardActions>
							{ this.state.commentBox && <Comments comments={dish.comments}/> }
							<Link to={`/${catId}/dishes`}>
								<FlatButton label="Return"/>
							</Link>
							<FlatButton
								icon={<InsertComment/>}
								label={ this.state.commentBox ? "hide comments" : "show comments"}
						    onClick={this.toggleCommentBox}
							/>
						</CardActions>
					</div> : <CustomCircularProgress/> }
			</Card>
		);
	}
}

export default SingleDish;