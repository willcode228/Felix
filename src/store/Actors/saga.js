import { call, put, takeEvery, select } from 'redux-saga/effects';
import { FETCH_ACTORS, setActorsFull, setActorsLoading, setActorsSuccess } from './actions';
import { actorsApi } from '../../api/actorsApi';
import { setErrorPage } from '../ErrorPage/actions';

function* fetchActorsWorker() {
	try {

		yield put(setErrorPage());
		yield put(setActorsLoading(true));

		const page = yield select(state => state.actors.page);
		const actors = yield call(actorsApi.getActors, page+1);
		yield put(setActorsSuccess(actors));

		yield put(setActorsLoading(false));
		yield put(setActorsFull(true));

	} catch (error) {

		yield put(setActorsLoading(false));
		yield put(setErrorPage(error));
		yield put(setActorsFull(false));

	}
}

export function* actorsWatcher() {
	yield takeEvery(FETCH_ACTORS, fetchActorsWorker);
}
