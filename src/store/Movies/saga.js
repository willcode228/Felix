import {put, takeEvery, call} from 'redux-saga/effects';
import { FETCH_MOVIES, setLoading, setMoviesError, setMoviesSuccess } from './actions';
import { moviesApi } from '../../api/moviesApi';

function* fetchMoviesWorker() {
	try {
		yield put(setMoviesError({error: false, errorMessage: ''}))

		yield put(setLoading(true));

		const allMoviesTypes = yield call(moviesApi.getAllMoviesTypes);
		yield put(setMoviesSuccess(allMoviesTypes));

		yield put(setLoading(false));

	} catch (error) {
		yield put(setLoading(false));
		yield put(setMoviesError({error: true, errorMessage: error || error.message}))
	}
}

export function* moviesWatcher() {
	yield takeEvery(FETCH_MOVIES, fetchMoviesWorker);
}