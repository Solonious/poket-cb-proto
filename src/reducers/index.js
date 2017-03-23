import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { routerReducer } from 'react-router-redux';

import dishes from './dishes';
import categories from './categories';

const rootReducer = combineReducers({
	dishes,
	categories,
	form,
	routing: routerReducer,
});

export default rootReducer;