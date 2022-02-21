import { SET_SHOW_INFO_SUCCESS } from './actions';

const initialState = {
	details: {
		poster_path: '',
		backdrop_path: '',
		title: '',
		release_date: '',
		overview: '',
		genres: [],
		tagline: '',
		runtime: '',
		production_companies: [],
		belongs_to_collection: null
	},
	recommendations: {
		results: []
	},
	credits: {
		cast: [],
		crew: []
	},
	images: {
		backdrops: [],
		posters: []
	}
};

const showInfoReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_SHOW_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

export default showInfoReducer;