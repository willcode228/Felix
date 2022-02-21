import rootApi from './rootApi';

const getSearchResult = async (page, searchQuery) => {
	const result = await rootApi.get(`/search/multi?query=${searchQuery}&page=${page}`);
	return result.data;
}

export const searchApi = {getSearchResult};