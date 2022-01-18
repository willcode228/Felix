import { MOVIES, PEOPLE, TV } from './consts';
import Movies from '../components/Movies/Movies';

const DefaultComponent = (title) => {
	return () => <h1>{title} Component For Routes</h1>;
};

export const publicRoutes = [
	{
		Component: Movies,
		path: MOVIES,
		key: MOVIES
	},

	{
		Component: DefaultComponent('TV'),
		path: TV,
		key: TV
	},

	{
		Component: DefaultComponent('People'),
		path: PEOPLE,
		key: PEOPLE
	}
]