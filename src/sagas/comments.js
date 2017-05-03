import 'babel-polyfill';
import { takeLatest } from 'redux-saga/effects';
import { put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {actions as toastrActions} from 'react-redux-toastr';
import { GET_COMMENTS, DELETE_COMMENT, POST_COMMENT } from '../constants/comments';
import {
	getCommentsSuccess,
	getCommentsFailure,
	deleteCommentSuccess,
	deleteCommentFailure,
	postCommentSuccess,
	postCommentFailure
} from '../actions/comments';

import { logoutUser } from '../actions/auth';

const selectedComment = (state) => {
	return state.getIn(['comments', 'list']).toJS();
};

const fetchComments = (dish_id) => {
	return fetch(`http://localhost:8080/dishes/${dish_id}/comments`, {
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})
		.then(response => {
			response.json();
		})
};

const deleteServerComment = (dish_id, comment_id) => {
	return fetch(`http://localhost:8080/dishes/${dish_id}/comments/${comment_id}`, {
		headers: new Headers({
			'Content-Type': 'application/json',
			'x-access-token':  localStorage.getItem('token')
		}),
		method: 'DELETE',
	})
		.then(response => {
			if (response.status === 200) {
				return response.json();
			}
			throw response;
		});
};

const postServerComment = (dish_id, comment) => {
	return fetch(`http://localhost:8080/dishes/${dish_id}/comments`, {
		headers: new Headers({
			'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem('token')
		}),
		method: 'POST',
		body: JSON.stringify(comment)
	})
		.then(response => {
			if (response.status === 200) {
				return response.json();
			}
			throw response;
		});
};

function* getComments (action) {
	// const { dish_id } = action;
	try {
		const comments = yield call(fetchComments, action.dish_id);
		yield put(getCommentsSuccess(comments));
	} catch (err) {
		yield put(getCommentsFailure());
	}
}

function* deleteComment (action) {
	const { dish_id, comment_id } = action;
	const comments = yield select(selectedComment);
	try {
		const result = yield call(deleteServerComment, dish_id, comment_id);
		yield put(toastrActions.add({
			type: 'success',
			title: 'Poket Cookbook',
			message:result.message
		}));
		yield put(deleteCommentSuccess(comments.filter(comment => comment._id !== comment_id)));
	} catch (err) {
		let message = '';
		if(err.status === 403) {
			yield put(logoutUser());
			message = 'Invalid token. You are being logged off';
		} else {
			yield put(deleteCommentFailure());
			message = 'Sorry, an error occured!';
		}
		localStorage.removeItem('token');
		yield put(toastrActions.add({
			type: 'error',
			title: 'Poket Cookbook',
			message: message
		}));
	}
}

const getCommentForm = (state) => {
	return state.getIn(['form', 'commentForm']).toJS();
};

function* postComment () {
	const comment = yield select(getCommentForm);
	const newComment = Object.assign({}, comment.values);
	try {
		const result = yield call(postServerComment, newComment);
		yield put(toastrActions.add({
			type: 'success',
			title: 'Poket Cookbook',
			message: result.message
		}));
		yield put(postCommentSuccess());
		yield put(push('/admin/category'))
	} catch (err) {
		let message = '';
		if (err.status === 403) {
			yield put(logoutUser());
			message = 'Invalid token. You are being logged off';
		} else {
			yield put(postCommentFailure());
			message = 'Sorry, an error occured!';
		}
		localStorage.removeItem('token');
		yield put(toastrActions.add({
			type: 'error',
			title: 'Poket Cookbook',
			message: message
		}));
	}
}

function* watchGetComments () {
	yield takeLatest(GET_COMMENTS, getComments);
}

function* watchDeleteComment () {
	yield takeLatest(DELETE_COMMENT, deleteComment);
}

function* watchPostComment () {
	yield takeLatest(POST_COMMENT, postComment);
}



export {
	watchGetComments,
	watchDeleteComment,
	watchPostComment,
};