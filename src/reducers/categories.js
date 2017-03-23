import Immutable from 'immutable';
// Here the constants file comes handy
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE
} from '../constants/categories';

// The initial state is just an empty Map
const initialState = Immutable.Map();

// That's a very standard reducer function to return a new state given a dispatched action
export default (state = initialState, action) => {
    switch (action.type) {
        // GET_GAMES_SUCCESS case return a new state with the fetched games in the state
        case GET_CATEGORIES_SUCCESS: {
            return state.merge({ list: action.categories });
        }
        // In case of failure it simplies returned a new empty state
        case GET_CATEGORIES_FAILURE: {
            return state.clear();
        }
        default:
            return state;
    }
}