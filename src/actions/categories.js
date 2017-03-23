import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE
} from '../constants/categories';

function getCategories () {
    return {
        type: GET_CATEGORIES
    };
}

function getCategoriesSuccess (categories) {
    return {
        type: GET_CATEGORIES_SUCCESS,
        categories
    };
}

function getCategoriesFailure () {
    return {
        type: GET_CATEGORIES_FAILURE
    };
}

export {
    getCategories,
    getCategoriesSuccess,
    getCategoriesFailure
};