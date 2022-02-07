import {
	SET_COLLECTION_LOADING,
	SET_COLLECTION_SUCCESS,
} from './actions';

const initialState = {
	loading: false,
	details: {
		backdrop_path: '',
		poster_path: '',
		name: '',
		overview: '',
		parts: [],
		images: {
			backdrops: [],
			posters: []
		}
	}
};

const collectionReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_COLLECTION_LOADING:
			return {
				...state,
				loading: action.payload
			}
		case SET_COLLECTION_SUCCESS:
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

export default collectionReducer;