export const SET_SHOW_INFO_SUCCESS = 'SHOW_INFO/SET_SHOW_INFO_SUCCESS';
export const FETCH_SHOW_INFO = 'SHOW_INFO/FETCH_SHOW_INFO';

export const fetchShowInfo = (payload) => ({
	type: FETCH_SHOW_INFO, payload
});

export const setShowInfoSuccess = (payload) => ({
	type: SET_SHOW_INFO_SUCCESS, payload
});
