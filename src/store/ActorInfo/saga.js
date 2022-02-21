import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_ACTOR_INFO, setActorInfoSuccess } from './actions';
import { actorInfoApi } from '../../api/actorInfoApi';
import { setErrorPage } from '../ErrorPage/actions';
import { setLoading } from '../Loading/actions';

function* fetchActorInfoWorker(actorId) {
	try {
		yield put(setErrorPage());
		yield put(setLoading(true));

		const actorInfo = yield call(actorInfoApi.getActorAllInfo, actorId.payload);
		yield put(setActorInfoSuccess(actorInfo));

		yield put(setLoading(false));

	} catch (error) {
		yield put(setErrorPage(error));
		yield put(setLoading(false));
	}
}

export function* actorInfoWatcher() {
	yield takeEvery(FETCH_ACTOR_INFO, fetchActorInfoWorker);
}