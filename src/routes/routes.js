import { MOVIES, PEOPLE, PEOPLE_INFO, TV } from './consts';
import Movies from '../components/Movies/Movies';
import Shows from '../components/Shows/Shows';
import Actors from '../components/Actors/Actors';
import ActorInfo from '../components/ActorInfo/ActorInfo';

const DefaultComponent = (title) => {
	return () => <h1 style={{marginTop: '120px'}}>{title}</h1>
}

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
	},

	{
		Component: ActorInfo,
		path: `${PEOPLE_INFO}/:actorId`,
		key: `${PEOPLE_INFO}/:actorId`
	}
]