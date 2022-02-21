import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setErrorPage } from '../ErrorPage/actions';
import { FETCH_SEARCH, setSearchQuery, setSearchSuccess } from './actions';
import { searchApi } from '../../api/searchApi';
import { setLoading } from '../Loading/actions';

function* fetchSearchWorker(newSearchQuery) {
	try {
		yield put(setErrorPage())
		yield put(setLoading(true));

		const {page, searchQuery} = yield select(state => state.search);
		const newPage = searchQuery !== newSearchQuery.payload ? 1 : page+1;

		const searchResult = yield call(searchApi.getSearchResult, newPage, newSearchQuery.payload);
		yield put(setSearchSuccess(searchResult));

		yield put(setLoading(false));
		yield put(setSearchQuery(newSearchQuery.payload));

	} catch (error) {
		yield put(setLoading(false));
		yield put(setErrorPage(error));
	}
}

export function* searchWatcher() {
	yield takeEvery(FETCH_SEARCH, fetchSearchWorker);
}