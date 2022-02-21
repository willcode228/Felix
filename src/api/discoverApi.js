import rootApi from './rootApi';

const getDiscoverData = async (mediaType, page) => {
	const discover = await rootApi.get(`/discover/${mediaType}?page=${page}`);
	return discover.data;
}

export const discoverApi = {getDiscoverData};