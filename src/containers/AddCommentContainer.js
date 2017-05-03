import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { hashHistory } from 'react-router';
import { AddComment } from '../components';

import * as commentsActionCreators from '../actions/comments';

class AddCommentContainer extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
		this.getComments = this.getComments.bind(this);
	}
	getComments() {
		this.props.commentsActions.getComments();
	}
	deleteComment() {
		this.props.commentsActions.deleteComment();
	}

	submit(event) {
		event.preventDefault();
		this.props.commentsActions.deleteComment();
		hashHistory.push('/admin/category');
	}

	render() {
		return (
			<AddComment />
		);
	}
}

function mapStateToProps (state) {
	return {
		comments: state.getIn(['comments', 'list'], Immutable.List()).toJS(),
	}
}

function mapDispatchToProps (dispatch) {
	return {
		commentsActions: bindActionCreators(commentsActionCreators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentContainer);