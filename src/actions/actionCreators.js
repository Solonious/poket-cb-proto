
export const addCategoryAction = (name, src) => ({
	type: 'ADD_CATEGORY',
	name,
	src
});

export const deleteCategoryAction = (id) => ({
	type: 'DELETE_CATEGORY',
	id
});
