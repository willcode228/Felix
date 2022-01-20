import {put, takeEvery, call} from 'redux-saga/effects';
import {
	FETCH_MOVIES,
	setMoviesError,
	setMoviesFull,
	setMoviesLoading,
	setMoviesSuccess
} from './actions';
import { moviesApi } from '../../api/moviesApi';

function* fetchMoviesWorker() {
	try {
		yield put(setMoviesError({error: false, errorMessage: ''}))

		yield put(setMoviesLoading(true));

		const allMoviesTypes = yield call(moviesApi.getAllMoviesTypes);
		yield put(setMoviesSuccess(allMoviesTypes));

		yield put(setMoviesLoading(false));
		yield put(setMoviesFull(true));

	} catch (error) {
		yield put(setMoviesLoading(false));
		yield put(setMoviesError({error: true, errorMessage: error || error.message}));
		yield put(setMoviesFull(false));
	}
}

export function* moviesWatcher() {
	yield takeEvery(FETCH_MOVIES, fetchMoviesWorker);
}