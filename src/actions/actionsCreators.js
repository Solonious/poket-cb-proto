import * as types from '../constants/actionTypes';

export const selectedCategoryAction = (category) => ({
	type: types.SELECTED_CATEGORY,
	category
});

export const selectedDishAction = (dish) => ({
	type: types.SELECTED_DISH,
	dish
});
