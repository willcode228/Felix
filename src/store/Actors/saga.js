import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ACTORS, setActorsError, setActorsFull, setActorsLoading, setActorsSuccess } from './actions';
import { actorsApi } from '../../api/actorsApi';

function* fetchActorsWorker() {
	try {

		yield put(setActorsError({error: false, errorMessage: ''}));
		yield put(setActorsLoading(true));

		const actors = yield call(actorsApi.getActors);
		yield put(setActorsSuccess(actors));

		yield put(setActorsLoading(false));
		yield put(setActorsFull(true));

	} catch (error) {

		yield put(setActorsLoading(false));
		yield put(setActorsError({error: true, errorMessage: error || error.message}));
		yield put(setActorsFull(false));

	}
}

export function* actorsWatcher() {
	yield takeEvery(FETCH_ACTORS, fetchActorsWorker);
}
