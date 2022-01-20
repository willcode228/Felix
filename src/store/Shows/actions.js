export const SET_SHOWS_SUCCESS = 'SHOWS/SET_SHOWS_SUCCESS';
export const SET_SHOWS_ERROR = 'SHOWS/SET_SHOWS_ERROR';
export const SET_SHOWS_LOADING = 'SHOWS/SET_SHOWS_LOADING';
export const SET_SHOWS_FULL = 'SHOWS/SET_SHOWS_FULL';
export const FETCH_SHOWS = 'SHOWS/FETCH_SHOWS';

export const fetchShows = () => ({
	type: FETCH_SHOWS
});

export const setShowsSuccess = (payload) => ({
	type: SET_SHOWS_SUCCESS, payload
});

export const setShowsError = (payload) => ({
	type: SET_SHOWS_ERROR, payload
});

export const setShowsLoading = (payload) => ({
	type: SET_SHOWS_LOADING, payload
});

export const setShowsFull = (payload) => ({
	type: SET_SHOWS_FULL, payload
});





