import {
	SET_ACTOR_INFO_ERROR,
	SET_ACTOR_INFO_LOADING,
	SET_ACTOR_INFO_SUCCESS,
} from './actions';

const initialState = {
	error: false,
	errorMessage: '',
	loading: false,
	details: {
		profile_path: '',
		name: '',
		gender: 0,
		place_of_birth: '',
		known_for_department: '',
		birthday: '',
		also_known_as: ''
	}
};

const actorInfoReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_ACTOR_INFO_LOADING:
			return {
				...state,
				loading: action.payload
			}
		case SET_ACTOR_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
			}
		case SET_ACTOR_INFO_ERROR:
			return {
				...state,
				error: action.payload.error,
				errorMessage: action.payload.errorMessage
			}
		default:
			return state
	}
}

export default actorInfoReducer;