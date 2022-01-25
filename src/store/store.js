import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootWatcher from './rootWatcher';
import moviesReducer from './Movies/reducer';
import showsReducer from './Shows/reducer';
import actorsReducer from './Actors/reducer';
import actorInfoReducer from './ActorInfo/reducer';
import movieInfoReducer from './MovieInfo/reducer';


const saga = createSagaMiddleware();

const reducers = combineReducers({
	movies: moviesReducer,
	shows: showsReducer,
	actors: actorsReducer,
	actorInfo: actorInfoReducer,
	movieInfo: movieInfoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));

saga.run(rootWatcher);

export default store;