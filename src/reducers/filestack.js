import Immutable from 'immutable';
import {
	UPLOAD_PICTURE_SUCCESS,
	UPLOAD_PICTURE_FAILURE,
	REMOVE_PICTURE_SUCCESS,
	REMOVE_PICTURE_FAILURE
} from '../constants/filestack';
import { POST_DISH_SUCCESS, POST_DISH_FAILURE } from '../constants/dishes';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_PICTURE_SUCCESS: {
            return state.merge({ url: action.url });
        }
	      case REMOVE_PICTURE_SUCCESS:
	      case REMOVE_PICTURE_FAILURE:
        case POST_DISH_SUCCESS:
        case POST_DISH_FAILURE:
        case UPLOAD_PICTURE_FAILURE: {
            return state.clear();
        }
        default:
            return state;
    }
}