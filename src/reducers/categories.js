import Immutable from 'immutable';

import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE,
} from '../constants/categories';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CATEGORY_SUCCESS:
        case GET_CATEGORIES_SUCCESS: {
            return state.merge({ list: action.categories });
        }
        case DELETE_CATEGORY_FAILURE:
        case GET_CATEGORIES_FAILURE: {
            return state.clear();
        }
        default:
            return state;
    }
}