import { SET_MOVIES_FULL, SET_MOVIES_SUCCESS, } from './actions';

const initialState = {
	popular: {},
	playing: {},
	topRated: {},
	upcoming: {},
	isFull: false
}

const moviesReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_MOVIES_SUCCESS:
			return {
				...state,
				...action.payload
			}
		case SET_MOVIES_FULL:
			return {
				...state,
				isFull: action.payload
			}
		default:
			return state
	}
}

export default moviesReducer;