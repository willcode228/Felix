export const SET_MOVIES_SUCCESS = 'MOVIES/SET_MOVIES_SUCCESS';
export const FETCH_MOVIES = 'MOVIES/FETCH_MOVIES';
export const SET_MOVIES_FULL = 'MOVIES/SET_FULL_STATUS';


export const setMoviesSuccess = (payload) => ({
	type: SET_MOVIES_SUCCESS, payload
});

export const setMoviesFull = (payload) => ({
	type: SET_MOVIES_FULL, payload
});

export const fetchMovies = () => ({
	type: FETCH_MOVIES
});