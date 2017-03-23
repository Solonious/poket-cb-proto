import 'babel-polyfill';
import { takeLatest } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import { GET_DISHES } from '../constants/dishes';
import { getDishesSuccess, getDishesFailure } from '../actions/dishes';

const fetchDishes = () => {
	return fetch('http://localhost:8080/dishes', {
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})
		.then(response => response.json())
};

function* getDishes () {
	try {
		const dishes = yield call(fetchDishes);
		yield put(getDishesSuccess(dishes));
	} catch (err) {
		yield put(getDishesFailure());
	}
}

function* watchGetDishes () {
	yield takeLatest(GET_DISHES, getDishes);
}

export {
	watchGetDishes
};