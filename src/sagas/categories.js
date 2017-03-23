import 'babel-polyfill';
import { takeLatest } from 'redux-saga/effects';
import { put, call, select } from 'redux-saga/effects';
import { GET_CATEGORIES, DELETE_CATEGORY } from '../constants/categories';
import { getCategoriesSuccess, getCategoriesFailure, deleteCategorySuccess, deleteCategoryFailure } from '../actions/categories';

const selectedCategory = (state) => {
    return state.getIn(['categories', 'list']).toJS();
};

const fetchCategories = () => {
    return fetch('http://localhost:8080/category', {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(response => response.json())
};

const deleteServerCategory = (id) => {
    console.log(id);
    return fetch(`http://localhost:8080/category/${id}`, {
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

function* getCategories () {
    try {
        const categories = yield call(fetchCategories);
        yield put(getCategoriesSuccess(categories));
    } catch (err) {
        yield put(getCategoriesFailure());
    }
}

function* deleteCategory (action) {
    const { id } = action;

    const categories = yield select(selectedCategory);
    try {
        yield call(deleteServerCategory, id);
        yield put(deleteCategorySuccess(categories.filter(category => category._id !== id)));
    } catch (err) {
        yield put(deleteCategoryFailure());
    }
}

function* watchGetCategories () {
    yield takeLatest(GET_CATEGORIES, getCategories);
}

function* watchDeleteCategory () {
    yield takeLatest(DELETE_CATEGORY, deleteCategory);
}



export {
    watchGetCategories,
    watchDeleteCategory,
};