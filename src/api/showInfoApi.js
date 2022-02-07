import rootApi from './rootApi';

const getShowDetails = async (showId) => {
	const details = await rootApi.get(`/tv/${showId}`);
	return details;
}

const getShowCredits = async (showId) => {
	const credits = await rootApi.get(`/tv/${showId}/credits`);
	return credits;
}

const getShowImages = async (showId) => {
	const images = await rootApi.get(`/tv/${showId}/images`);
	return images;
}

const getShowRecommendations = async (showId) => {
	const recommendations = await rootApi.get(`/tv/${showId}/recommendations`);
	return recommendations;
}

const getShowLinks = async (showId) => {
	const links = await rootApi.get(`/tv/${showId}/external_ids`);
	return links;
}

const getShowKeywords = async (showId) => {
	const keywords = await rootApi.get(`/tv/${showId}/keywords`);
	return keywords;
}

const getShowAllInfo = async (showId) => {
	const [details, credits, images, recommendations, links, keywords] = await Promise.all([
		getShowDetails(showId),
		getShowCredits(showId),
		getShowImages(showId),
		getShowRecommendations(showId),
		getShowLinks(showId),
		getShowKeywords(showId)
	]);

	return {
		details: details.data, credits: credits.data, images: images.data,
		recommendations: recommendations.data, links: links.data, keywords: keywords.data
	}
}

export const showInfoApi = {getShowDetails, getShowCredits, getShowImages, getShowRecommendations, getShowLinks, getShowKeywords, getShowAllInfo};