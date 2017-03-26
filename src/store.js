import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const enchancers = compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);

	const store = createStore(
		rootReducer,
		enchancers,
		applyMiddleware(sagaMiddleware),
	);
	sagaMiddleware.run(rootSaga);

	return store;
};
export default configureStore;



