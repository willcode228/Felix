import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COLLECTION, setCollectionSuccess } from './actions';
import { collectionApi } from '../../api/collectionApi';
import { setErrorPage } from '../ErrorPage/actions';
import { setLoading } from '../Loading/actions';

function* fetchCollectionWorker(collectionId) {
	try {

		yield put(setErrorPage());
		yield put(setLoading(true));

		const collection = yield call(collectionApi.getCollectionAllInfo, collectionId.payload);
		yield put(setCollectionSuccess(collection));

		yield put(setLoading(false));

	} catch (error) {
		yield put(setErrorPage(error));
		yield put(setLoading(false));
	}
}

export function* collectionWatcher() {
	yield takeEvery(FETCH_COLLECTION, fetchCollectionWorker);
}