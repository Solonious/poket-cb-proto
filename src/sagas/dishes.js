import 'babel-polyfill';
import { takeLatest } from 'redux-saga/effects';
import { put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {actions as toastrActions} from 'react-redux-toastr';
import { GET_DISHES, DELETE_DISH, POST_DISH } from '../constants/dishes';
import {
	getDishesSuccess,
	getDishesFailure,
	deleteDishSuccess,
	deleteDishFailure,
	postDishSuccess,
	postDishFailure,
} from '../actions/dishes';

import { logoutUser } from '../actions/auth';

const selectedDish = (state) => {
    return state.getIn(['dishes', 'list']).toJS();
};

const selectedPicture = (state) => {
    return state.getIn(['filestack', 'url'], '');
};

const fetchDishes = () => {
	return fetch('http://localhost:8080/dishes', {
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})
		.then(response => response.json())
};

const deleteServerDish = (id) => {
	return fetch(`http://localhost:8080/dishes/${id}`, {
		headers: new Headers({
			'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem('token')
		}),
		method: 'DELETE',
	})
		.then(response => {
			if (response.status === 200) {
				return response.json();
			}
			throw response.json();
		});
};

const postServerDish = (dish) => {
	return fetch('http://localhost:8080/dishes', {
		headers: new Headers({
			'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem('token')
		}),
		method: 'POST',
		body: JSON.stringify(dish)
	})
		.then(res => {
			if (res.status === 200) {
				return res.json();
			}
			throw res;
		});
};

function* getDishes () {
	try {
		const dishes = yield call(fetchDishes);
		yield put(getDishesSuccess(dishes));
	} catch (err) {
		yield put(getDishesFailure());
	}
}

function* deleteDish (action) {
	const {id} = action;
	const dishes = yield select(selectedDish);
	try {
		const result = yield call(deleteServerDish, id);
		yield put(toastrActions.add({
			type: 'success',
			title: result.message
		}));
		yield put(deleteDishSuccess(dishes.filter(dish => dish._id !== id)));
	} catch (err) {
		let message = '';
		if (err.status === 403) {
			yield put(logoutUser());
			message = 'Invalid token. You are being logged off';
		} else {
			yield put(deleteDishFailure());
			message = 'Sorry, an error occured!';
		}
		localStorage.removeItem('token');
		yield put(toastrActions.add({
			type: 'error',
			title: 'Poket Cookbook',
			message: message
		}));
	}
}

const getDishForm = (state) => {
	return state.getIn(['form', 'dishForm']).toJS();
};

function* postDish () {
	const srcImage = yield select(selectedPicture);
	const dish = yield select(getDishForm);
	const newDish = Object.assign({}, {srcImage}, dish.values);
	try {
		const result = yield call(postServerDish, newDish);
		yield put(toastrActions.add({
			type: 'success',
			title: 'Poket Cookbook',
			message: result.message
		}));
		yield put(postDishSuccess());
		yield put(push('/admin/dishes'))
	} catch (err) {
		let message = '';
		if (err.status === 403) {
			yield put(logoutUser());
			message = 'Invalid token. You are being logged off';
		} else {
			yield put(postDishFailure());
			message = 'Sorry, an error occured!';
		}
		localStorage.removeItem('token');
		yield put(toastrActions.add({
			type: 'error',
			title: 'Poket Cookbook',
			message: message
		}));
	}
}

function* watchGetDishes () {
	yield takeLatest(GET_DISHES, getDishes);
}

function* watchDeleteDish () {
    yield takeLatest(DELETE_DISH, deleteDish);
}

function* watchPostDish () {
	yield takeLatest(POST_DISH, postDish);
}

export {
	watchGetDishes,
	watchDeleteDish,
	watchPostDish,
};