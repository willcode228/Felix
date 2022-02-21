export const FETCH_LOADING = 'LOADING/FETCH_LOADING';
export const SET_LOADING_SUCCESS = 'LOADING/SET_LOADING_SUCCESS';

export const setLoading = (payload) => ({
	type: FETCH_LOADING, payload
})

export const setLoadingSuccess = (payload) => ({
	type: SET_LOADING_SUCCESS, payload
});