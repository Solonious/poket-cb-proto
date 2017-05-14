import Immutable from 'immutable';

import {
	GET_DISHES_SUCCESS,
	GET_DISHES_FAILURE,
	GET_DISH_SUCCESS,
	GET_DISH_FAILURE,
	DELETE_DISH_SUCCESS,
	DELETE_DISH_FAILURE,
} from '../constants/dishes';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
    switch (action.type) {
	    case DELETE_DISH_SUCCESS:
	    case GET_DISHES_SUCCESS:
	    case GET_DISH_SUCCESS: {
            return state.merge({ list: action.dishes });
        }
	    case DELETE_DISH_FAILURE:
	    case GET_DISHES_FAILURE:
	    case GET_DISH_FAILURE:{
            return state.clear();
        }
        default:
            return state;
    }
}