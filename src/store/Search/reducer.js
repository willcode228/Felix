import { SET_SEARCH_QUERY, SET_SEARCH_SUCCESS, } from './actions';

const initialState = {
	page: 1,
	results: [],
	searchQuery: ''
}

const searchReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_SUCCESS:
			return {
				...state,
				results: action.payload.page === 1
					? [...action.payload.results]
					: [...state.results, ...action.payload.results],
				page: action.payload.page
			}
		case SET_SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload
			}
		default:
			return state
	}
}

export default searchReducer;