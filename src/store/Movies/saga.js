import {put, takeEvery, call} from 'redux-saga/effects';
import {
	FETCH_MOVIES,
	setMoviesFull,
	setMoviesLoading,
	setMoviesSuccess
} from './actions';
import { moviesApi } from '../../api/moviesApi';
import { setErrorPage } from '../ErrorPage/actions';

function* fetchMoviesWorker() {
	try {
		yield put(setErrorPage())

		yield put(setMoviesLoading(true));

		const allMoviesTypes = yield call(moviesApi.getAllMoviesTypes);
		yield put(setMoviesSuccess(allMoviesTypes));

		yield put(setMoviesLoading(false));
		yield put(setMoviesFull(true));

	} catch (error) {
		yield put(setMoviesLoading(false));
		yield put(setErrorPage(error));
		yield put(setMoviesFull(false));
	}
}

export function* moviesWatcher() {
	yield takeEvery(FETCH_MOVIES, fetchMoviesWorker);
}