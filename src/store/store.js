import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootWatcher from './rootWatcher';
import moviesReducer from './Movies/reducer';
import showsReducer from './Shows/reducer';
import actorsReducer from './Actors/reducer';
import actorInfoReducer from './ActorInfo/reducer';
import movieInfoReducer from './MovieInfo/reducer';
import collectionReducer from './Collection/reducer';
import errorPageReducer from './ErrorPage/reducer';
import showInfoReducer from './ShowInfo/reducer';
import searchReducer from './Search/reducer';
import discoverReducer from './Discover/reducer';
import loadingReducer from './Loading/reducer';

const reducers = combineReducers({
	errorPage: errorPageReducer,
	movies: moviesReducer,
	shows: showsReducer,
	actors: actorsReducer,
	actorInfo: actorInfoReducer,
	movieInfo: movieInfoReducer,
	collection: collectionReducer,
	showInfo: showInfoReducer,
	search: searchReducer,
	discover: discoverReducer,
	loading: loadingReducer
});

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));

saga.run(rootWatcher);

export default store;