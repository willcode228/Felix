import rootApi from './rootApi';

const getActorDetails = async (actorId) => {
	const details = await rootApi.get(`/person/${actorId}`);
	return details.data;
}

const getActorCombinedCredits = async (actorId) => {
	const credits = await rootApi.get(`/person/${actorId}/combined_credits`);
	return credits.data;
}

const getActorLinks = async (actorId) => {
	const links = await rootApi.get(`/person/${actorId}/external_ids`);
	return links.data;
}

const getActorImages = async (actorId) => {
	const images = await rootApi.get(`/person/${actorId}/images`);
	return images.data;
}

const getActorAllInfo = async (actorId) => {
	const [details, credits, links, images] = await Promise.all([
		getActorDetails(actorId),
		getActorCombinedCredits(actorId),
		getActorLinks(actorId),
		getActorImages(actorId)
	]);

	return {details, credits, links, images}
}

export const actorInfoApi = { getActorDetails, getActorCombinedCredits, getActorLinks, getActorImages, getActorAllInfo};