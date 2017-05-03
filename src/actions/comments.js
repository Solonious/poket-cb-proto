import {
	//get
	GET_COMMENTS,
	GET_COMMENTS_SUCCESS,
	GET_COMMENTS_FAILURE,
	//delete
	DELETE_COMMENT,
	DELETE_COMMENT_SUCCESS,
	DELETE_COMMENT_FAILURE,
	//post
	POST_COMMENT,
	POST_COMMENT_SUCCESS,
	POST_COMMENT_FAILURE,
} from '../constants/comments';

function getComments (dish_id) {
	return {
		type: GET_COMMENTS,
		dish_id
	};
}

function getCommentsSuccess (comments) {
	return {
		type: GET_COMMENTS_SUCCESS,
		comments
	};
}

function getCommentsFailure () {
	return {
		type: GET_COMMENTS_FAILURE
	};
}

function deleteComment (id) {
	return {
		type: DELETE_COMMENT,
		id,
	};
}

function deleteCommentSuccess (comments) {
	return {
		type: DELETE_COMMENT_SUCCESS,
		comments
	};
}

function deleteCommentFailure () {
	return {
		type: DELETE_COMMENT_FAILURE
	};
}

function postComment () {
	return {
		type: POST_COMMENT
	};
}

function postCommentSuccess () {
	return {
		type: POST_COMMENT_SUCCESS
	};
}

function postCommentFailure () {
	return {
		type: POST_COMMENT_FAILURE
	};
}


export {
	getComments,
	getCommentsSuccess,
	getCommentsFailure,
	deleteComment,
	deleteCommentSuccess,
	deleteCommentFailure,
	postComment,
	postCommentSuccess,
	postCommentFailure,
};