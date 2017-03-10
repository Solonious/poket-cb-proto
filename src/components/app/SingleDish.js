import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

import { dishFetchData } from '../../libs/helpers';

const styles = {
	card: {
		width: '100%',
		maxWidth: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
};

class SingleDish extends React.Component {
	constructor() {
		super();
		this.state = {data: []};
	}

	componentDidMount() {
		const { catId, dishId } = this.props.params;
		const url = `http://localhost:8080/${catId}/dishes/${dishId}`;
		console.log(url);
		dishFetchData(url).then(data => {
			this.setState({data: data});
		});
	}
	render() {
		console.log(this.state);
		const { category, dishName, description, srcImage } = this.state.data;
		const { catId } = this.props.params;
		return (
			<Card style={styles.card}>
				<CardMedia
					overlay={
						<CardTitle title={dishName} subtitle={category}/>}
				>
					<img
						src={srcImage}
						alt=""/>
				</CardMedia>
				<CardTitle title={dishName} subtitle={category}/>
				<CardText>{description}</CardText>
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