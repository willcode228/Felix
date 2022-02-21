import { call, put, takeEvery, select } from 'redux-saga/effects';
import { FETCH_ACTORS, setActorsFull, setActorsSuccess } from './actions';
import { actorsApi } from '../../api/actorsApi';
import { setErrorPage } from '../ErrorPage/actions';
import { setLoading } from '../Loading/actions';

function* fetchActorsWorker() {
	try {

		yield put(setErrorPage());
		yield put(setLoading(true));

		const page = yield select(state => state.actors.page);
		const actors = yield call(actorsApi.getActors, page+1);

		yield put(setActorsSuccess(actors));

		yield put(setLoading(false));
		yield put(setActorsFull(true));

	} catch (error) {

		yield put(setLoading(false));
		yield put(setErrorPage(error));
		yield put(setActorsFull(false));

	}
}

export function* actorsWatcher() {
	yield takeEvery(FETCH_ACTORS, fetchActorsWorker);
}
