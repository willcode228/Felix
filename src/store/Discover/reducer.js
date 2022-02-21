import { SET_DISCOVER_SUCCESS, SET_DISCOVER_TYPE } from './actions';

const initialState = {
	page: 0,
	results: [],
	mediaType: '',
}

const discoverReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_DISCOVER_SUCCESS:
			console.log(action.payload);
			return {
				...state,
				results: action.payload.page === 1
					? action.payload.results
					: [...state.results, ...action.payload.results],
				page: action.payload.page
			}
		case SET_DISCOVER_TYPE:
			return {
				...state,
				mediaType: action.payload
			}
		default:
			return state;
	}
}

export default discoverReducer;