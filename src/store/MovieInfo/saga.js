import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_MOVIE_INFO } from './actions';
import { setMovieInfoLoading, setMovieInfoSuccess } from './actions';
import { movieInfoApi } from '../../api/movieInfoApi';
import { setErrorPage } from '../ErrorPage/actions';

function* fetchMovieInfoWorker(actorId) {
	try {
		yield put(setErrorPage());
		yield put(setMovieInfoLoading(true));

		const actorInfo = yield call(movieInfoApi.getMovieAllInfo, actorId.payload);
		yield put(setMovieInfoSuccess(actorInfo));

		yield put(setMovieInfoLoading(false));

	} catch (error) {
		yield put(setErrorPage(error));
		yield put(setMovieInfoLoading(false));
	}
}

export function* movieInfoWatcher() {
	yield takeEvery(FETCH_MOVIE_INFO, fetchMovieInfoWorker);
}