export const SET_ACTOR_INFO_SUCCESS = 'ACTOR_INFO/SET_ACTOR_INFO_SUCCESS';
export const FETCH_ACTOR_INFO = 'ACTOR_INFO/FETCH_ACTOR_INFO';

export const fetchActorInfo = (payload) => ({
	type: FETCH_ACTOR_INFO, payload
});

export const setActorInfoSuccess = (payload) => ({
	type: SET_ACTOR_INFO_SUCCESS, payload
});
