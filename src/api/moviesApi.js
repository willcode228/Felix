import rootApi from './rootApi';
import { call, put } from 'redux-saga/effects';
import { setMoviesSuccess } from '../store/Movies/actions';

const getPopularMovies = async (page=1) => {
	const popular = await rootApi.get(`movie/popular?page=${page}`);
	return popular;
};

const getLatestMovies = async (page=1) => {
	const latest = await rootApi.get(`movie/latest?page=${page}`);
	return latest;
};

const getTopRatedMovies = async (page=1) => {
	const topRated = await rootApi.get(`movie/top_rated?page=${page}`);
	return topRated;
}

const getUpcomingMovies = async (page=1) => {
	const upcoming = await rootApi.get(`movie/upcoming?page=${page}`);
	return upcoming;
}

const getAllMoviesTypes = async () => {
	const [popular, latest, topRated, upcoming] = await Promise.all([
		getPopularMovies(), getLatestMovies(), getTopRatedMovies(), getUpcomingMovies()
	]);

	return {
		popular: popular.data, latest: latest.data,
		topRated: topRated.data, upcoming: upcoming.data
	}

}

export const moviesApi = {getPopularMovies, getLatestMovies, getTopRatedMovies, getUpcomingMovies, getAllMoviesTypes};