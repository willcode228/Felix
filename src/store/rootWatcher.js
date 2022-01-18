import { all } from 'redux-saga/effects';
import { moviesWatcher } from './Movies/saga';

function* rootWatcher() {
	yield all([
		moviesWatcher(),
	]);
}

export default rootWatcher;