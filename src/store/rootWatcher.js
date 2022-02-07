import { all } from 'redux-saga/effects';
import { moviesWatcher } from './Movies/saga';
import { showsWatcher } from './Shows/saga';
import { actorsWatcher } from './Actors/saga';
import { actorInfoWatcher } from './ActorInfo/saga';
import { movieInfoWatcher } from './MovieInfo/saga';
import { collectionWatcher } from './Collection/saga';
import { errorPageWatcher } from './ErrorPage/saga';
import { showInfoWatcher } from './ShowInfo/saga';

function* rootWatcher() {
	yield all([
		moviesWatcher(),
		showsWatcher(),
		actorsWatcher(),
		actorInfoWatcher(),
		movieInfoWatcher(),
		showInfoWatcher(),
		collectionWatcher(),
		errorPageWatcher()
	]);
}

export default rootWatcher;