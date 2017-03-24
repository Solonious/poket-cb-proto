import 'babel-polyfill';
import { takeLatest } from 'redux-saga/effects';
import { put, call, select } from 'redux-saga/effects';
import { GET_DISHES, DELETE_DISH, POST_DISH } from '../constants/dishes';
import {
	getDishesSuccess,
	getDishesFailure,
	deleteDishSuccess,
	deleteDishFailure,
	postDishSuccess,
	postDishFailure,
} from '../actions/dishes';

const selectedDish = (state) => {
    return state.getIn(['dishes', 'list']).toJS();
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
        }),
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(response => {
            console.log(response.message);
        });
};

const postServerDish = (dish) => {
	return fetch('http://localhost:8080/dishes', {
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		method: 'POST',
		body: JSON.stringify(dish)
	})
		.then(res => res.json());
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
    const { id } = action;

    const dishes = yield select(selectedDish);
    try {
        yield call(deleteServerDish, id);
        yield put(deleteDishSuccess(dishes.filter(dish => dish._id !== id)));
    } catch (err) {
        yield put(deleteDishFailure());
    }
}

const getDishForm = (state) => {
	return state.getIn(['form', 'dishForm']).toJS();
};

function* postDish () {
	const dish = yield select(getDishForm);

	const newDish = Object.assign({}, dish.values);
	try {
		yield call(postServerDish, newDish);
		yield put(postDishSuccess());
	} catch (err) {
		yield put(postDishFailure());
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