import { SET_SHOWS_ERROR, SET_SHOWS_FULL, SET_SHOWS_LOADING, SET_SHOWS_SUCCESS } from './actions';

const initialState = {
	popular: {},
	topRated: {},
	onAir: {},
	error: false,
	errorMessage: '',
	loading: false,
	isFull: false
};

const showsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SHOWS_LOADING:
			return {
				...state,
				loading: action.payload
			};
		case SET_SHOWS_FULL:
			return {
				...state,
				isFull: action.payload
			};
		case SET_SHOWS_SUCCESS:
			return {
				...state,
				...action.payload
			};
		case SET_SHOWS_ERROR:
			return {
				...state,
				error: action.payload.error,
				errorMessage: action.payload.errorMessage
			};
		default:
			return state;
	}
};

export default showsReducer;