export const FETCH_SEARCH = 'SEARCH/FETCH_SEARCH';
export const SET_SEARCH_SUCCESS = 'SEARCH/SET_SEARCH_SUCCESS';
export const SET_SEARCH_QUERY = 'SEARCH/SET_SEARCH_QUERY';

export const setSearchSuccess = (payload) => ({
	type: SET_SEARCH_SUCCESS, payload
});

export const fetchSearch = (payload) => ({
	type: FETCH_SEARCH, payload
});

export const setSearchQuery = (payload) => ({
	type: SET_SEARCH_QUERY, payload
});