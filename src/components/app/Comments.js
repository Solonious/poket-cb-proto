import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';

import AddCommentForm from './AddCommentForm';

import styles from '../styles';

const EditBtn = () => (
			<div className="editBox" style={styles.editBtnContainer}>
				<FlatButton icon={<ModeEdit color={'green'}/>} style={styles.editBtn}/>
				<FlatButton icon={<DeleteForever color={'red'}/>} style={styles.editBtn}/>
			</div>
		);

class Comments extends React.PureComponent {
	render() {
		const { comments } = this.props;
		const commentStyles = comments.length ? styles.card : {};
		return (
			<div>
				<List style={commentStyles}>
						<h3>Comments</h3>
						{ comments.length ? comments.map((comment) => (
							<div key={comment._id}>
								<ListItem
									onMouseEnter={(e) => {
										console.log(e.target.tagName);
										if(e.target.tagName === 'DIV') {
											e.target.children[0].style.opacity = 1
										}
									}}
									onMouseLeave={(e) => {
										if(e.target.tagName === 'DIV') {
											e.target.children[0].style.opacity = 0
										}
									}}
									style={styles.listItem}>
									<EditBtn />
									<span style={styles.name}>{comment.postedBy.name}</span>
									<span style={styles.date}>{comment.updatedAt}</span>
									<p style={styles.text}>{comment.comment}</p>
								</ListItem>
								<Divider/>
							</div>
						)) : 'no comment yet... Be are first!!!'}
						<AddCommentForm/>
					</List>
			</div>
		);
	}
}

export default Comments;