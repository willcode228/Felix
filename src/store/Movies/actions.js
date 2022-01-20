export const SET_MOVIES_SUCCESS = 'MOVIES/SET_MOVIES_SUCCESS';
export const SET_MOVIES_ERROR = 'MOVIES/SET_MOVIES_ERROR';
export const FETCH_MOVIES = 'MOVIES/FETCH_MOVIES';
export const SET_MOVIES_LOADING = 'MOVIES/SET_MOVIES_LOADING';
export const SET_MOVIES_FULL = 'MOVIES/SET_FULL_STATUS';


export const setMoviesSuccess = (payload) => ({
	type: SET_MOVIES_SUCCESS, payload
});

export const setMoviesError = (payload) => ({
	type: SET_MOVIES_ERROR, payload
})

export const setMoviesLoading = (payload) => ({
	type: SET_MOVIES_LOADING, payload
});

export const setMoviesFull = (payload) => ({
	type: SET_MOVIES_FULL, payload
});

export const fetchMovies = () => ({
	type: FETCH_MOVIES
});