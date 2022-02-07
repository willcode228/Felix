import { put, takeEvery } from 'redux-saga/effects';
import { SET_ERROR_PAGE, setErrorPageResult } from './actions';

function* errorPageWorker(error) {
	let errorObject = {};

	if(error.payload)
		errorObject = {error: true, errorMessage: error.payload?.message || error.payload};
	else
		errorObject = {error: false, errorMessage: ''};

	yield put(setErrorPageResult(errorObject));
}

export function* errorPageWatcher() {
	yield takeEvery(SET_ERROR_PAGE, errorPageWorker);
}