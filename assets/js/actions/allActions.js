export const addBook = book => {
	return {
		type: 'ADD_BOOK',
		payload: book
	};
};

export const removeBook = book => {
	return {
		type: 'REMOVE_BOOK',
		payload: book
	};
};

export const openInfoBook = book => {
	return {
		type: 'OPEN_INFO_BOOK',
		payload: book
	};
};

export const closeInfoBook = book => {
	return {
		type: 'CLOSE_INFO_BOOK',
		payload: book
	};
};

export const openMyList = () => {
	return {
		type: 'OPEN_MY_LIST'
	};
};

export const closeMyList = () => {
	return {
		type: 'CLOSE_MY_LIST'
	};
};
