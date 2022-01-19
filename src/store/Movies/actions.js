export const SET_MOVIES_SUCCESS = 'MOVIES/SET_MOVIES_SUCCESS';
export const SET_MOVIES_ERROR = 'MOVIES/SET_MOVIES_ERROR';
export const FETCH_MOVIES = 'MOVIES/FETCH_MOVIES';
export const SET_MOVIES_LOADING = 'MOVIES/SET_MOVIES_LOADING';
export const SET_FULL_STATUS = 'MOVIES/SET_FULL_STATUS';


export const setMoviesSuccess = (payload) => ({
	type: SET_MOVIES_SUCCESS, payload
});

export const setMoviesError = (payload) => ({
	type: SET_MOVIES_ERROR, payload
})

export const setLoading = (payload) => ({
	type: SET_MOVIES_LOADING, payload
});

export const setFullStatus = (payload) => ({
	type: SET_FULL_STATUS, payload
});

export const fetchMovies = () => ({
	type: FETCH_MOVIES
});