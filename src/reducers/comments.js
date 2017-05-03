import Immutable from 'immutable';

import {
	GET_COMMENTS_SUCCESS,
	GET_COMMENTS_FAILURE,
	DELETE_COMMENT_SUCCESS,
	DELETE_COMMENT_FAILURE,
} from '../constants/comments';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
	switch (action.type) {
		case DELETE_COMMENT_SUCCESS:
		case GET_COMMENTS_SUCCESS: {
			return state.merge({ list: action.comments });
		}
		case DELETE_COMMENT_FAILURE:
		case GET_COMMENTS_FAILURE: {
			return state.clear();
		}
		default:
			return state;
	}
}