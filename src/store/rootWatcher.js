import { all } from 'redux-saga/effects';
import { moviesWatcher } from './Movies/saga';
import { showsWatcher } from './Shows/saga';
import { actorsWatcher } from './Actors/saga';
import { actorInfoWatcher } from './ActorInfo/saga';
import { movieInfoWatcher } from './MovieInfo/saga';

function* rootWatcher() {
	yield all([
		moviesWatcher(),
		showsWatcher(),
		actorsWatcher(),
		actorInfoWatcher(),
		movieInfoWatcher()
	]);
}

export default rootWatcher;