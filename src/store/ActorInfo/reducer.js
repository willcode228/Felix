import { SET_ACTOR_INFO_SUCCESS, } from './actions';

const initialState = {
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