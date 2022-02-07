import {
	SET_ACTOR_INFO_LOADING,
	SET_ACTOR_INFO_SUCCESS,
} from './actions';

const initialState = {
	loading: false,
	details: {
		profile_path: '',
		name: '',
		gender: 0,
		place_of_birth: '',
		known_for_department: '',
		birthday: '',
		also_known_as: ''
	},
	credits: {
		cast: [],
		crew: []
	},
	images: {
		profiles: []
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
		default:
			return state
	}
}

export default actorInfoReducer;