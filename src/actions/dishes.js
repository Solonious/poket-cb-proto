import {
	GET_DISHES,
	GET_DISHES_SUCCESS,
	GET_DISHES_FAILURE
} from '../constants/Dishes';

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

export {
	getDishes,
	getDishesSuccess,
	getDishesFailure
};