export const SET_ACTORS_SUCCESS = 'ACTORS/SET_ACTORS_SUCCESS';
export const SET_ACTORS_FULL = 'ACTORS/SET_ACTORS_FULL';
export const FETCH_ACTORS = 'ACTORS/FETCH_ACTORS';

export const fetchActors = () => ({
	type: FETCH_ACTORS
});

export const setActorsSuccess = (payload) => ({
	type: SET_ACTORS_SUCCESS, payload
});

export const setActorsFull = (payload) => ({
	type: SET_ACTORS_FULL, payload
});
