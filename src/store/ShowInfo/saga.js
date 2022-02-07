import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_SHOW_INFO } from './actions';
import { setShowInfoLoading, setShowInfoSuccess } from './actions';
import { setErrorPage } from '../ErrorPage/actions';
import { showInfoApi } from '../../api/showInfoApi';

function* fetchShowInfoWorker(showId) {
	try {
		yield put(setErrorPage());
		yield put(setShowInfoLoading(true));

		const actorInfo = yield call(showInfoApi.getShowAllInfo, showId.payload);
		yield put(setShowInfoSuccess(actorInfo));

		yield put(setShowInfoLoading(false));

	} catch (error) {
		yield put(setErrorPage(error));
		yield put(setShowInfoLoading(false));
	}
}

export function* showInfoWatcher() {
	yield takeEvery(FETCH_SHOW_INFO, fetchShowInfoWorker);
}