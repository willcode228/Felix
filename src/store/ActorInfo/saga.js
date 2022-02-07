import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_ACTOR_INFO, setActorInfoLoading, setActorInfoSuccess } from './actions';
import { actorInfoApi } from '../../api/actorInfoApi';
import { setErrorPage } from '../ErrorPage/actions';

function* fetchActorInfoWorker(actorId) {
	try {
		yield put(setErrorPage());
		yield put(setActorInfoLoading(true));

		const actorInfo = yield call(actorInfoApi.getActorAllInfo, actorId.payload);
		yield put(setActorInfoSuccess(actorInfo));

		yield put(setActorInfoLoading(false));

	} catch (error) {
		yield put(setErrorPage(error));
		yield put(setActorInfoLoading(false));
	}
}

export function* actorInfoWatcher() {
	yield takeEvery(FETCH_ACTOR_INFO, fetchActorInfoWorker);
}