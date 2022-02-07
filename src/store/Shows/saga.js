import { call, put, takeEvery } from 'redux-saga/effects';
import { showsApi } from '../../api/showsApi';
import { FETCH_SHOWS, setShowsFull, setShowsLoading, setShowsSuccess } from './actions';
import { setErrorPage } from '../ErrorPage/actions';

function* fetchShowsWorker() {
	try {

		yield put(setShowsFull(false));
		yield put(setErrorPage());
		yield put(setShowsLoading(true));

		const allShowsTypes = yield call(showsApi.getAllShowsTypes);
		yield put(setShowsSuccess(allShowsTypes));

		yield put(setShowsLoading(false));
		yield put(setShowsFull(true));

	} catch (error) {

		yield put(setShowsLoading(false));
		yield put(setErrorPage(error));
		yield put(setShowsFull(false));

	}
}

export function* showsWatcher() {
	yield takeEvery(FETCH_SHOWS, fetchShowsWorker);
}