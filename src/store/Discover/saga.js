import { call, put, select, takeEvery } from 'redux-saga/effects';
import { FETCH_DISCOVER, setDiscoverSuccess, setDiscoverType } from './actions';
import { setErrorPage } from '../ErrorPage/actions';
import { discoverApi } from '../../api/discoverApi';
import { setLoading } from '../Loading/actions';

function* fetchDiscoverWorker(discoverSettings) {
	try {

		yield put(setErrorPage());
		yield put(setLoading(true));

		const {mediaType, page} = yield select(state => state.discover);
		const newPage = mediaType !== discoverSettings.payload ? 1 : page+1;

		const discover = yield call(discoverApi.getDiscoverData, discoverSettings.payload, newPage);
		yield put(setDiscoverSuccess(discover));

		yield put(setLoading(false));
		yield put(setDiscoverType(discoverSettings.payload));

	} catch (error) {
		yield put(setErrorPage(error));
		yield put(setLoading(false));
	}
}

export function* discoverWatcher() {
	yield takeEvery(FETCH_DISCOVER, fetchDiscoverWorker);
}