import { all } from 'redux-saga/effects';
import { moviesWatcher } from './Movies/saga';
import { showsWatcher } from './Shows/saga';
import { actorsWatcher } from './Actors/saga';
import { actorInfoWatcher } from './ActorInfo/saga';

function* rootWatcher() {
	yield all([
		moviesWatcher(),
		showsWatcher(),
		actorsWatcher(),
		actorInfoWatcher()
	]);
}

export default rootWatcher;