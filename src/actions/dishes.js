import {
	//get dishes
	GET_DISHES,
	GET_DISHES_SUCCESS,
	GET_DISHES_FAILURE,
	//delete dishes
    DELETE_DISH,
    DELETE_DISH_SUCCESS,
    DELETE_DISH_FAILURE,
} from '../constants/dishes';

function getDishes () {
	return {
		type: GET_DISHES
	};
}

function getDishesSuccess (dishes) {
	return {
		type: GET_DISHES_SUCCESS,
		dishes
	};
}

function getDishesFailure () {
	return {
		type: GET_DISHES_FAILURE
	};
}

function deleteDish (id) {
    return {
        type: DELETE_DISH,
        id,
    };
}

function deleteDishSuccess (categories) {
    return {
        type: DELETE_DISH_SUCCESS,
        categories
    };
}

function deleteDishFailure () {
    return {
        type: DELETE_DISH_FAILURE
    };
}

export {
	getDishes,
	getDishesSuccess,
	getDishesFailure,
	deleteDish,
	deleteDishSuccess,
	deleteDishFailure,
};