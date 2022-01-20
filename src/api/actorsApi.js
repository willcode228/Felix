import rootApi from './rootApi';

const getActors = async (page=1) => {
	const actors = await rootApi.get(`/person/popular?page=${page}`);
	return actors.data;
}

export const actorsApi = {getActors};