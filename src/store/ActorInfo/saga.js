import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_ACTOR_INFO, setActorInfoError, setActorInfoLoading, setActorInfoSuccess } from './actions';
import { actorInfoApi } from '../../api/actorInfoApi';

function* fetchActorInfoWorker(actorId) {
	try {
		yield put(setActorInfoError({error: false, errorMessage: ''}));
		yield put(setActorInfoLoading(true));

		const actorInfo = yield call(actorInfoApi.getActorAllInfo, actorId.payload);
		yield put(setActorInfoSuccess(actorInfo));

		yield put(setActorInfoLoading(false));

	} catch (error) {
		yield put(setActorInfoError({error: true, errorMessage: error || error.message}));
		yield put(setActorInfoLoading(false));
	}
}

export function* actorInfoWatcher() {
	yield takeEvery(FETCH_ACTOR_INFO, fetchActorInfoWorker);
}