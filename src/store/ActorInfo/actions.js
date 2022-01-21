export const SET_ACTOR_INFO_SUCCESS = 'ACTOR_INFO/SET_ACTOR_INFO_SUCCESS';
export const SET_ACTOR_INFO_ERROR = 'ACTOR_INFO/SET_ACTOR_INFO_ERROR';
export const SET_ACTOR_INFO_LOADING = 'ACTOR_INFO/SET_ACTOR_INFO_LOADING';
export const FETCH_ACTOR_INFO = 'ACTOR_INFO/FETCH_ACTOR_INFO';

export const fetchActorInfo = (payload) => ({
	type: FETCH_ACTOR_INFO, payload
});

export const setActorInfoSuccess = (payload) => ({
	type: SET_ACTOR_INFO_SUCCESS, payload
});

export const setActorInfoError = (payload) => ({
	type: SET_ACTOR_INFO_ERROR, payload
});

export const setActorInfoLoading = (payload) => ({
	type: SET_ACTOR_INFO_LOADING, payload
});
