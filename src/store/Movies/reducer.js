import { SET_MOVIES_ERROR, SET_MOVIES_LOADING, SET_MOVIES_SUCCESS } from './actions';

const initialState = {
	popular: [],
	latest: [],
	topRated: [],
	upcoming: [],
	error: false,
	errorMessage: '',
	loading: false
}

const moviesReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_MOVIES_SUCCESS:
			return {
				...state,
				...action.payload
			}

		case SET_MOVIES_ERROR:
			return {
				...state,
				error: action.payload.error,
				errorMessage: action.payload.errorMessage
			}

		case SET_MOVIES_LOADING:
			return {
				...state,
				loading: action.payload
			}
		default:
			return state
	}
}

export default moviesReducer;