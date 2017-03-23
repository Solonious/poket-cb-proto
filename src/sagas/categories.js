import 'babel-polyfill';
import { takeLatest } from 'redux-saga/effects';
import { put, call, select } from 'redux-saga/effects';
import { GET_CATEGORIES, DELETE_CATEGORY, POST_CATEGORY } from '../constants/categories';
import {
    getCategoriesSuccess,
    getCategoriesFailure,
    deleteCategorySuccess,
    deleteCategoryFailure,
    postCategorySuccess,
    postCategoryFailure
} from '../actions/categories';

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

const postServerCategory = (category) => {
  return fetch('http://localhost:8080/category', {
      headers: new Headers({
          'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(category)
  })
      .then(res => res.json());
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

const getCategoryForm = (state) => {
    return state.getIn(['form', 'categoryForm']).toJS();
};

function* postCategory () {
    const category = yield select(getCategoryForm);

    const newCategory = Object.assign({}, category.values);
    try {
        yield call(postServerCategory, newCategory);
        yield put(postCategorySuccess());
    } catch (err) {
        yield put(postCategoryFailure());
    }
}

function* watchGetCategories () {
    yield takeLatest(GET_CATEGORIES, getCategories);
}

function* watchDeleteCategory () {
    yield takeLatest(DELETE_CATEGORY, deleteCategory);
}

function* watchPostCategory () {
    yield takeLatest(POST_CATEGORY, postCategory);
}



export {
    watchGetCategories,
    watchDeleteCategory,
    watchPostCategory,
};