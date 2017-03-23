import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { GET_DISHES } from '../constants/categories';
import { getCategoriesSuccess, getCategoriesFailure } from '../actions/categories';

const fetchCategories = () => {
	return fetch('http://localhost:8080/category', {
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})
		.then(response => response.json())
};

function* getCategories () {
	try {
		const categories = yield call(fetchCategories);
		yield put(getCategoriesSuccess(categories));
	} catch (err) {
		yield put(getCategoriesFailure());
	}
}

function* watchGetCategories () {
	yield takeLatest(GET_CATEGORIES, getCategories);
}

export {
	watchGetCategories
};