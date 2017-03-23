import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    DELETE_CATEGORY,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE,
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

function deleteCategory (id) {
    return {
        type: DELETE_CATEGORY,
        id,
    };
}

function deleteCategorySuccess (categories) {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        categories
    };
}

function deleteCategoryFailure () {
    return {
        type: DELETE_CATEGORY_FAILURE
    };
}


export {
    getCategories,
    getCategoriesSuccess,
    getCategoriesFailure,
    deleteCategory,
    deleteCategorySuccess,
    deleteCategoryFailure,
};