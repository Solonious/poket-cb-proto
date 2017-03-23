import 'babel-polyfill';
import { takeLatest } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import { GET_CATEGORIES } from '../constants/categories';
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