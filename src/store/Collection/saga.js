import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COLLECTION, setCollectionLoading, setCollectionSuccess } from './actions';
import { collectionApi } from '../../api/collectionApi';
import { setErrorPage } from '../ErrorPage/actions';

function* fetchCollectionWorker(collectionId) {
	try {

		yield put(setErrorPage());
		yield put(setCollectionLoading(true));

		const collection = yield call(collectionApi.getCollectionAllInfo, collectionId.payload);
		yield put(setCollectionSuccess(collection));

		yield put(setCollectionLoading(false));

	} catch (error) {
		yield put(setErrorPage(error));
		yield put(setCollectionLoading(false));
	}
}

export function* collectionWatcher() {
	yield takeEvery(FETCH_COLLECTION, fetchCollectionWorker);
}