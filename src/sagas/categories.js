import 'babel-polyfill';
import { takeLatest } from 'redux-saga/effects';
import { put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {actions as toastrActions} from 'react-redux-toastr';
import { GET_CATEGORIES, DELETE_CATEGORY, POST_CATEGORY } from '../constants/categories';
import {
    getCategoriesSuccess,
    getCategoriesFailure,
    deleteCategorySuccess,
    deleteCategoryFailure,
    postCategorySuccess,
    postCategoryFailure
} from '../actions/categories';

import { logoutUser } from '../actions/auth';

const selectedCategory = (state) => {
    return state.getIn(['categories', 'list']).toJS();
};

const selectedPicture = (state) => {
	return state.getIn(['filestack', 'url'], '');
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
				'x-access-token': localStorage.getItem('token')
			}),
			method: 'DELETE',
		})
			.then(response => {
				if (response.status === 200) {
					return response.json();
				}
				throw response;
			});
};

const postServerCategory = (category) => {
  return fetch('http://localhost:8080/category', {
      headers: new Headers({
	      'Content-Type': 'application/json',
	      'x-access-token': localStorage.getItem('token')
      }),
      method: 'POST',
      body: JSON.stringify(category)
  })
	  .then(response => {
		  if (response.status === 200) {
			  return response.json();
		  }
		  throw response;
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
        const result = yield call(deleteServerCategory, id);
        yield put(toastrActions.add({
        	type: 'success',
		    title: 'Poket Cookbook',
		    message:result.message
	    }));
        yield put(deleteCategorySuccess(categories.filter(category => category._id !== id)));
    } catch (err) {
    	let message = '';
    	if(err.status === 403) {
    		yield put(logoutUser());
    		message = 'Invalid token. You are being logged off';
	    } else {
        yield put(deleteCategoryFailure());
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

const getCategoryForm = (state) => {
    return state.getIn(['form', 'categoryForm']).toJS();
};

function* postCategory () {
	const picture = yield select(selectedPicture);
	const category = yield select(getCategoryForm);
	const newCategory = Object.assign({}, { picture }, category.values);
    try {
	    const result = yield call(postServerCategory, newCategory);
	    yield put(toastrActions.add({
		    type: 'success',
		    title: 'Poket Cookbook',
		    message: result.message
	    }));
	    yield put(postCategorySuccess());
	    yield put(push('/admin/category'))
    } catch (err) {
	    let message = '';
	    if (err.status === 403) {
		    yield put(logoutUser());
		    message = 'Invalid token. You are being logged off';
	    } else {
		    yield put(postCategoryFailure());
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