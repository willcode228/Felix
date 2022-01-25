import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_MOVIE_INFO } from './actions';
import { setMovieInfoError, setMovieInfoLoading, setMovieInfoSuccess } from './actions';
import { movieInfoApi } from '../../api/movieInfoApi';

function* fetchMovieInfoWorker(actorId) {
	try {
		yield put(setMovieInfoError({error: false, errorMessage: ''}));
		yield put(setMovieInfoLoading(true));

		const actorInfo = yield call(movieInfoApi.getMovieAllInfo, actorId.payload);
		yield put(setMovieInfoSuccess(actorInfo));

		yield put(setMovieInfoLoading(false));

	} catch (error) {
		yield put(setMovieInfoError({error: true, errorMessage: error || error.message}));
		yield put(setMovieInfoLoading(false));
	}
}

export function* movieInfoWatcher() {
	yield takeEvery(FETCH_MOVIE_INFO, fetchMovieInfoWorker);
}