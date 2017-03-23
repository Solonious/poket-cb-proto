function categories(state = [], action) {
	switch(action.type) {
		case 'ADD_CATEGORY':
			return [...state, {
				name: action.name,
				src: action.src,
			}];
		default: return state;
	}
}

export default categories;