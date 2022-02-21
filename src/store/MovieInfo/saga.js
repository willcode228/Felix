import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_MOVIE_INFO } from './actions';
import { setMovieInfoSuccess } from './actions';
import { movieInfoApi } from '../../api/movieInfoApi';
import { setErrorPage } from '../ErrorPage/actions';
import { setLoading } from '../Loading/actions';

function* fetchMovieInfoWorker(actorId) {
	try {
		yield put(setErrorPage());
		yield put(setLoading(true));

		const actorInfo = yield call(movieInfoApi.getMovieAllInfo, actorId.payload);
		yield put(setMovieInfoSuccess(actorInfo));

		yield put(setLoading(false));

	} catch (error) {
		yield put(setErrorPage(error));
		yield put(setLoading(false));
	}
}

export function* movieInfoWatcher() {
	yield takeEvery(FETCH_MOVIE_INFO, fetchMovieInfoWorker);
}