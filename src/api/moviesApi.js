import rootApi from './rootApi';
import { call, put } from 'redux-saga/effects';
import { setMoviesSuccess } from '../store/Movies/actions';

const getPopularMovies = async (page=1) => {
	const popular = await rootApi.get(`movie/popular?page=${page}`);
	return popular;
};

const getNowPLayingMovies = async (page=1) => {
	const playing = await rootApi.get(`movie/now_playing?page=${page}`);
	return playing;
}

const getTopRatedMovies = async (page=1) => {
	const topRated = await rootApi.get(`movie/top_rated?page=${page}`);
	return topRated;
}

const getUpcomingMovies = async (page=1) => {
	const upcoming = await rootApi.get(`movie/upcoming?page=${page}`);
	return upcoming;
}

const getAllMoviesTypes = async () => {
	const [popular, playing, topRated, upcoming] = await Promise.all([
		getPopularMovies(), getNowPLayingMovies(), getTopRatedMovies(), getUpcomingMovies()
	]);

	return {
		popular: popular.data, playing: playing.data,
		topRated: topRated.data, upcoming: upcoming.data
	}

}

export const moviesApi = {getPopularMovies, getNowPLayingMovies, getTopRatedMovies, getUpcomingMovies, getAllMoviesTypes};