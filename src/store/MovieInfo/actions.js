export const SET_MOVIE_INFO_SUCCESS = 'MOVIE_INFO/SET_MOVIE_INFO_SUCCESS';
export const SET_MOVIE_INFO_ERROR = 'MOVIE_INFO/SET_MOVIE_INFO_ERROR';
export const SET_MOVIE_INFO_LOADING = 'MOVIE_INFO/SET_MOVIE_INFO_LOADING';
export const FETCH_MOVIE_INFO = 'MOVIE_INFO/FETCH_MOVIE_INFO';

export const fetchMovieInfo = (payload) => ({
	type: FETCH_MOVIE_INFO, payload
});

export const setMovieInfoSuccess = (payload) => ({
	type: SET_MOVIE_INFO_SUCCESS, payload
});

export const setMovieInfoError = (payload) => ({
	type: SET_MOVIE_INFO_ERROR, payload
});

export const setMovieInfoLoading = (payload) => ({
	type: SET_MOVIE_INFO_LOADING, payload
});
