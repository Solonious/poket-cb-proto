import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import routing from './routing';

import dishes from './dishes';
import categories from './categories';
import filestack from './filestack';
import auth from './auth';
import comments from './comments';

import { reducer as toastr} from 'react-redux-toastr'

const rootReducer = combineReducers({
	dishes,
	categories,
	comments,
	form,
	filestack,
	auth,
	routing,
	toastr,
});

export default rootReducer;