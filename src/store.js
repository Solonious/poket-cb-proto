import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import { categories, dishes } from './data/index';


// const categoriesData = [];
// const dishesData = [];

//import reducer
import rootReducer from './reducers/index';

//create an object data
const defaultState = {
	categories,
	dishes,
};

const enchancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enchancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;