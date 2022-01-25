import rootApi from './rootApi';

const getMovieDetails = async (movieId) => {
	const details = await rootApi.get(`/movie/${movieId}`);
	return details;
}

const getMovieCredits = async (movieId) => {
	const credits = await rootApi.get(`/movie/${movieId}/credits`);
	return credits;
}

const getMovieImages = async (movieId) => {
	const images = await rootApi.get(`/movie/${movieId}/images`);
	return images;
}

const getMovieRecommendations = async (movieId) => {
	const recommendations = await rootApi.get(`/movie/${movieId}/recommendations`);
	return recommendations;
}

const getMovieLinks = async (movieId) => {
	const links = await rootApi.get(`/movie/${movieId}/external_ids`);
	return links;
}

const getMovieKeywords = async (movieId) => {
	const keywords = await rootApi.get(`/movie/${movieId}/keywords`);
	return keywords;
}

const getMovieAllInfo = async (movieId) => {
	const [details, credits, images, recommendations, links, keywords] = await Promise.all([
		getMovieDetails(movieId),
		getMovieCredits(movieId),
		getMovieImages(movieId),
		getMovieRecommendations(movieId),
		getMovieLinks(movieId),
		getMovieKeywords(movieId)
	]);

	return {
		details: details.data, credits: credits.data, images: images.data,
		recommendations: recommendations.data, links: links.data, keywords: keywords.data
	}
}

export const movieInfoApi = {getMovieDetails, getMovieCredits, getMovieImages, getMovieRecommendations, getMovieLinks, getMovieKeywords, getMovieAllInfo};