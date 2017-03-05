import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import dishes from './dishes';
import categories from './categories';

const rootReducer = combineReducers({
	dishes,
	categories,
	routing: routerReducer
});

export default rootReducer;