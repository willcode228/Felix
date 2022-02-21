import { COLLECTION, DISCOVER, MOVIE_INFO, MOVIES, PEOPLE, PEOPLE_INFO, SEARCH, SHOW, SHOW_INFO } from './consts';
import Movies from '../components/Movies/Movies';
import Shows from '../components/Shows/Shows';
import Actors from '../components/Actors/Actors';
import ActorInfo from '../components/ActorInfo/ActorInfo';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import Collection from '../components/Collection/Collection';
import ShowInfo from '../components/ShowInfo/ShowInfo';
import SearchResult from '../components/SearchResult/SearchResult';
import Discover from '../components/Discover/Discover';

export const publicRoutes = [
	{
		Component: Movies,
		path: MOVIES,
		key: MOVIES
	},

	{
		Component: Shows,
		path: SHOW,
		key: SHOW
	},

	{
		Component: Actors,
		path: PEOPLE,
		key: PEOPLE
	},

	{
		Component: ActorInfo,
		path: `${PEOPLE_INFO}/:actorId`,
		key: `${PEOPLE_INFO}/:actorId`
	},

	{
		Component: MovieInfo,
		path: `${MOVIE_INFO}/:movieId`,
		key: `${MOVIE_INFO}/:movieId`
	},

	{
		Component: ShowInfo,
		path: `${SHOW_INFO}/:showId`,
		key: `${SHOW_INFO}/:showId`
	},

	{
		Component: Collection,
		path: `${COLLECTION}/:collectionId`,
		key: `${COLLECTION}/:collectionId`
	},

	{
		Component: SearchResult,
		path: `${SEARCH}/:searchQuery`,
		key: `${SEARCH}/:searchQuery`
	},

	{
		Component: Discover,
		path: `${DISCOVER}/:mediaType`,
		key: `${DISCOVER}/:mediaType`
	}
]