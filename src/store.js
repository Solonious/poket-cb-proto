import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const enchancers = compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);

	const routeMiddleware = routerMiddleware(hashHistory);
	const store = createStore(
		rootReducer,
		enchancers,
		applyMiddleware(sagaMiddleware, routeMiddleware),
	);
	sagaMiddleware.run(rootSaga);

	return store;
};
export default configureStore;



