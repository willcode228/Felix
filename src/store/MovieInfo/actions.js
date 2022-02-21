export const SET_MOVIE_INFO_SUCCESS = 'MOVIE_INFO/SET_MOVIE_INFO_SUCCESS';
export const FETCH_MOVIE_INFO = 'MOVIE_INFO/FETCH_MOVIE_INFO';

export const fetchMovieInfo = (payload) => ({
	type: FETCH_MOVIE_INFO, payload
});

export const setMovieInfoSuccess = (payload) => ({
	type: SET_MOVIE_INFO_SUCCESS, payload
});