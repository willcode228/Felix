import {
	SET_MOVIE_INFO_ERROR,
	SET_MOVIE_INFO_LOADING,
	SET_MOVIE_INFO_SUCCESS,
} from './actions';

const initialState = {
	error: false,
	errorMessage: '',
	loading: false,
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

const movieInfoReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_MOVIE_INFO_LOADING:
			return {
				...state,
				loading: action.payload
			}
		case SET_MOVIE_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
			}
		case SET_MOVIE_INFO_ERROR:
			return {
				...state,
				error: action.payload.error,
				errorMessage: action.payload.errorMessage
			}
		default:
			return state
	}
}

export default movieInfoReducer;