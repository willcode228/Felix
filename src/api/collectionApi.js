import rootApi from './rootApi';

const getCollectionDetails = async (collectionId) => {
	const details = await rootApi.get(`/collection/${collectionId}`);
	return details;
}

const getCollectionImages = async (collectionId) => {
	const images = await rootApi.get(`/collection/${collectionId}/images`);
	return images;
}

const getCollectionGenres = async () => {
	const genres = await rootApi.get(`/genre/movie/list`);
	return genres;
}

const getCollectionAllInfo = async (collectionId) => {
	const [details, images, genres] = await Promise.all([
		getCollectionDetails(collectionId),
		getCollectionImages(collectionId),
		getCollectionGenres()
	]);

	return {details: details.data, images: images.data, genres: genres.data.genres};
}


export const collectionApi = {getCollectionDetails, getCollectionImages, getCollectionAllInfo};