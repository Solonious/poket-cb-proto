import {
	//get dishes
	GET_DISHES,
	GET_DISHES_SUCCESS,
	GET_DISHES_FAILURE,
	//delete dishes
    DELETE_DISH,
    DELETE_DISH_SUCCESS,
    DELETE_DISH_FAILURE,
	//post dish
	POST_DISH,
	POST_DISH_SUCCESS,
	POST_DISH_FAILURE,
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

function deleteDishSuccess (dishes) {
    return {
        type: DELETE_DISH_SUCCESS,
        dishes
    };
}

function deleteDishFailure () {
    return {
        type: DELETE_DISH_FAILURE
    };
}

function postDish () {
	return {
		type: POST_DISH
	}
}

function postDishSuccess () {
	return {
		type: POST_DISH_SUCCESS
	}
}

function postDishFailure () {
	return {
		type: POST_DISH_FAILURE
	}
}

export {
	getDishes,
	getDishesSuccess,
	getDishesFailure,
	deleteDish,
	deleteDishSuccess,
	deleteDishFailure,
	postDish,
	postDishSuccess,
	postDishFailure,
};