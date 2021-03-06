export const SET_SHOWS_SUCCESS = 'SHOWS/SET_SHOWS_SUCCESS';
export const SET_SHOWS_FULL = 'SHOWS/SET_SHOWS_FULL';
export const FETCH_SHOWS = 'SHOWS/FETCH_SHOWS';

export const fetchShows = () => ({
	type: FETCH_SHOWS
});

export const setShowsSuccess = (payload) => ({
	type: SET_SHOWS_SUCCESS, payload
});

export const setShowsFull = (payload) => ({
	type: SET_SHOWS_FULL, payload
});





