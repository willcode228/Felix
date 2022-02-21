import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_SHOW_INFO } from './actions';
import { setShowInfoSuccess } from './actions';
import { setErrorPage } from '../ErrorPage/actions';
import { showInfoApi } from '../../api/showInfoApi';
import { setLoading } from '../Loading/actions';

function* fetchShowInfoWorker(showId) {
	try {
		yield put(setErrorPage());
		yield put(setLoading(true));

		const actorInfo = yield call(showInfoApi.getShowAllInfo, showId.payload);
		yield put(setShowInfoSuccess(actorInfo));

		yield put(setLoading(false));

	} catch (error) {
		yield put(setErrorPage(error));
		yield put(setLoading(false));
	}
}

export function* showInfoWatcher() {
	yield takeEvery(FETCH_SHOW_INFO, fetchShowInfoWorker);
}