import { put, takeEvery, delay } from 'redux-saga/effects';
import { FETCH_LOADING, setLoadingSuccess } from './actions';

function* loadingWorker(isLoading) {
	if (!isLoading.payload) {
		yield delay(500);
		yield put(setLoadingSuccess(isLoading.payload));
	} else {
		yield put(setLoadingSuccess(isLoading.payload));
	}
}

export function* loadingWatcher() {
	yield takeEvery(FETCH_LOADING, loadingWorker);
}