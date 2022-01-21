import { SET_ACTORS_ERROR, SET_ACTORS_FULL, SET_ACTORS_LOADING, SET_ACTORS_SUCCESS } from './actions';

const initialState = {
	results: [],
	error: false,
	errorMessage: '',
	loading: false,
	isFull: false,
	page: 0
};

const actorsReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_ACTORS_FULL:
			return {
				...state,
				isFull: action.payload
			}
		case SET_ACTORS_LOADING:
			return {
				...state,
				loading: action.payload
			}
		case SET_ACTORS_SUCCESS:
			return {
				...state,
				...action.payload,
				results: [...state.results, ...action.payload.results],
			}
		case SET_ACTORS_ERROR:
			return {
				...state,
				error: action.payload.error,
				errorMessage: action.payload.errorMessage
			}
		default:
			return state
	}
}

export default actorsReducer;