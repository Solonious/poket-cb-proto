import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

// import { categories, dishes } from './data/index';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const enchancers = compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);

	// The store is created with a reducer parameter and the saga middleware
	const store = createStore(
		rootReducer,
		enchancers,
		applyMiddleware(sagaMiddleware),
	);
	// rootSaga starts all the sagas in parallel
	sagaMiddleware.run(rootSaga);

	return store; // Return the state
};
export default configureStore;



