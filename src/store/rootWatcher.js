import { all } from 'redux-saga/effects';
import { moviesWatcher } from './Movies/saga';
import { showsWatcher } from './Shows/saga';
import { actorsWatcher } from './Actors/saga';
import { actorInfoWatcher } from './ActorInfo/saga';
import { movieInfoWatcher } from './MovieInfo/saga';
import { collectionWatcher } from './Collection/saga';
import { errorPageWatcher } from './ErrorPage/saga';
import { showInfoWatcher } from './ShowInfo/saga';
import { searchWatcher } from './Search/saga';
import { discoverWatcher } from './Discover/saga';
import { loadingWatcher } from './Loading/saga';

function* rootWatcher() {
	yield all([
		moviesWatcher(),
		showsWatcher(),
		actorsWatcher(),
		actorInfoWatcher(),
		movieInfoWatcher(),
		showInfoWatcher(),
		collectionWatcher(),
		errorPageWatcher(),
		searchWatcher(),
		discoverWatcher(),
		loadingWatcher()
	]);
}

export default rootWatcher;