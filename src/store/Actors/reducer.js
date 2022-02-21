import { SET_ACTORS_FULL, SET_ACTORS_SUCCESS } from './actions';

const initialState = {
	results: [],
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
		case SET_ACTORS_SUCCESS:
			return {
				...state,
				...action.payload,
				results: [...state.results, ...action.payload.results],
			}
		default:
			return state
	}
}

export default actorsReducer;