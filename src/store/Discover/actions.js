export const FETCH_DISCOVER = 'DISCOVER/FETCH_DISCOVER';
export const SET_DISCOVER_SUCCESS = 'DISCOVER/SET_DISCOVER_RESULT';
export const SET_DISCOVER_TYPE = 'DISCOVER/SET_DISCOVER_TYPE';

export const fetchDiscover = (payload) => ({
	type: FETCH_DISCOVER, payload
});

export const setDiscoverSuccess = (payload) => ({
	type: SET_DISCOVER_SUCCESS, payload
});

export const setDiscoverType = (payload) => ({
	type: SET_DISCOVER_TYPE, payload
});
