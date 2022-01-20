import rootApi from './rootApi';

const getTopRatedShows = async (page = 1) => {
	const topRated = await rootApi.get(`/tv/top_rated?page=${page}`);
	return topRated;
}

const getPopularShows = async (page = 1) => {
	const popular = await rootApi.get(`/tv/popular?page=${page}`);
	return popular;
}

const getAirShows = async (page = 1) => {
	const air = await rootApi.get(`/tv/on_the_air?page=${page}`);
	return air
}

const getAllShowsTypes = async () => {
	const [topRated, popular, air] = await Promise.all([
		getTopRatedShows(),
		getPopularShows(),
		getAirShows()
	]);

	return {topRated: topRated.data, popular: popular.data, onAir: air.data}
}

export const showsApi = {getTopRatedShows, getPopularShows, getAirShows, getAllShowsTypes};