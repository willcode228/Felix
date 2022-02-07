export const SET_COLLECTION_SUCCESS = 'COLLECTION/SET_COLLECTION_SUCCESS';
export const SET_COLLECTION_LOADING = 'COLLECTION/SET_COLLECTION_LOADING';
export const FETCH_COLLECTION = 'COLLECTION/FETCH_COLLECTION';

export const fetchCollection = (payload) => ({
	type: FETCH_COLLECTION, payload
});

export const setCollectionSuccess = (payload) => ({
	type: SET_COLLECTION_SUCCESS, payload
});

export const setCollectionLoading = (payload) => ({
	type: SET_COLLECTION_LOADING, payload
});
