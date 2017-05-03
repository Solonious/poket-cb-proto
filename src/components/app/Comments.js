import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { grey400 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';

import styles from '../styles';

const style = {
	name: {
		display: 'block',
		fontWeight: 'bold'
	},
	list: {
		width: '80%',
		margin: '0 auto',
		listStyle: 'none',
		padding: 0,
		position: 'relative',
	},
	listItem: {
		textAlign: 'left',
		position: 'relative'
	},
	date: {
		fontSize: '0.6rem',
		color: grey400
	},
	text: {
		fontSize: '0.7rem',
		textAlign: 'justify',
		lineHeight: '3px'
	},
	btnContainer: {
		position: 'absolute',
		top: 5,
		right: 5,
		opacity: 0,
	}
};

// const comments = [
// 	{
// 		"updatedAt": "2017-04-29T17:47:46.837Z",
// 		"createdAt": "2017-04-29T17:47:46.837Z",
// 		"comment": "Test comment",
// 		"rating": 1,
// 		"postedBy": {
// 			"_id": "590410e57747e50d3d37a34f",
// 			"name": "Admin",
// 			"email": "admin@admin.com",
// 			"__v": 0,
// 			"admin": true
// 		},
// 		"_id": "5904d1c2bf9d62117722d172"
// 	},
// 	{
// 		"updatedAt": "2017-04-29T17:47:55.609Z",
// 		"createdAt": "2017-04-29T17:47:55.609Z",
// 		"comment": "Test comment",
// 		"rating": 3,
// 		"postedBy": {
// 			"_id": "590410e57747e50d3d37a34f",
// 			"name": "Admin",
// 			"email": "admin@admin.com",
// 			"__v": 0,
// 			"admin": true
// 		},
// 		"_id": "5904d1cbbf9d62117722d173"
// 	},
// 	{
// 		"updatedAt": "2017-04-29T17:48:00.340Z",
// 		"createdAt": "2017-04-29T17:48:00.340Z",
// 		"comment": "Test comment",
// 		"rating": 3,
// 		"postedBy": {
// 			"_id": "590410e57747e50d3d37a34f",
// 			"name": "Admin",
// 			"email": "admin@admin.com",
// 			"__v": 0,
// 			"admin": true
// 		},
// 		"_id": "5904d1d0bf9d62117722d174"
// 	}
// ];

const EditBtn = () => (
			<div className="editBox" style={style.btnContainer}>
				<FlatButton icon={<ModeEdit color={'green'}/>} style={styles.editBtn}/>
				<FlatButton icon={<DeleteForever color={'red'}/>} style={styles.editBtn}/>
			</div>
		);

class Comments extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		}
	}
	render() {
		const { comments } = this.props;
		return (
			<div>
				<List style={styles.card}>
					<List style={style.list}>
						<h3>Comments</h3>
						{comments.map((comment) => (
							<div key={comment._id}>
								<ListItem
									onMouseEnter={(e) => {
										if(e.target.tagName === 'DIV') {
											e.target.children[0].style.opacity = 1
										}
									}}
									onMouseLeave={(e) => {
										if(e.target.tagName === 'DIV') {
											e.target.children[0].style.opacity = 0
										}
									}}
									style={style.listItem}>
									<EditBtn />
									<span style={style.name}>{comment.postedBy.name}</span>
									<span style={style.date}>{comment.updatedAt}</span>
									<p style={style.text}>{comment.comment}</p>
								</ListItem>
								<Divider/>
							</div>
						))}

					</List>
				</List>
			</div>
		);
	}
}

export default Comments;