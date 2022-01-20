export const SET_ACTORS_SUCCESS = 'ACTORS/SET_ACTORS_SUCCESS';
export const SET_ACTORS_ERROR = 'ACTORS/SET_ACTORS_ERROR';
export const SET_ACTORS_LOADING = 'ACTORS/SET_ACTORS_LOADING';
export const SET_ACTORS_FULL = 'ACTORS/SET_ACTORS_FULL';
export const FETCH_ACTORS = 'ACTORS/FETCH_ACTORS';

export const fetchActors = () => ({
	type: FETCH_ACTORS
});

export const setActorsSuccess = (payload) => ({
	type: SET_ACTORS_SUCCESS, payload
});

export const setActorsError = (payload) => ({
	type: SET_ACTORS_ERROR, payload
});

export const setActorsLoading = (payload) => ({
	type: SET_ACTORS_LOADING, payload
});

export const setActorsFull = (payload) => ({
	type: SET_ACTORS_FULL, payload
});
