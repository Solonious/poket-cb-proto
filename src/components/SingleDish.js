import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const styles = {
	card: {
		width: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
};

const SingleDish = () => (
	<Card style={styles.card}>
		<CardMedia
			overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
		>
			<img src="https://static.wixstatic.com/media/4947de_401c94663a794832aef3063f37bd175c~mv2_d_2048_2048_s_2.jpg_256" alt=""/>
		</CardMedia>
		<CardTitle title="Card title" subtitle="Card subtitle" />
		<CardText>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		</CardText>
		<CardActions>
			<Link to="/category">
				<FlatButton label="Return" />
			</Link>

		</CardActions>
	</Card>
);

export default SingleDish;