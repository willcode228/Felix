import { SET_SHOWS_FULL, SET_SHOWS_SUCCESS } from './actions';

const initialState = {
	popular: {},
	topRated: {},
	onAir: {},
	isFull: false
};

const showsReducer = (state = initialState, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};

export default showsReducer;