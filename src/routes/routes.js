import { MOVIES, PEOPLE, TV } from './consts';
import Movies from '../components/Movies/Movies';
import Shows from '../components/Shows/Shows';
import Actors from '../components/Actors/Actors';

export const publicRoutes = [
	{
		Component: Movies,
		path: MOVIES,
		key: MOVIES
	},

	{
		Component: Shows,
		path: TV,
		key: TV
	},

	{
		Component: Actors,
		path: PEOPLE,
		key: PEOPLE
	}
]